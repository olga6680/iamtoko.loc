<?php
class ControllerExtensionModuleProductall extends Controller {
	public function index($setting) {
		$this->load->language('extension/module/productall');

		$this->load->model('catalog/product');

		$this->load->model('tool/image');
		$this->load->model('catalog/category');
		$this->load->language('product/category');

		$data['categories'] = array();

		$results = $this->model_catalog_category->getCategories();

		foreach ($results as $result) {

			$data['categories'][] = array(
				'category_id'  => $result['category_id'],
				'name' => $result['name'],
				'href' => $this->url->link('product/category', 'path=' . $result['category_id'])
			);
		}

		$data['products'] = array();

		$filter_data = array(
			'sort'  => 'p.price',
			'order' => 'DESC',
			'start' => 0,
			'limit' => $setting['limit']
		);

		$results = $this->model_catalog_product->getProducts($filter_data);

		if ($results) {
			foreach ($results as $result) {
				if ($result['image']) {
					$image = $this->model_tool_image->resize($result['image'], $setting['width'], $setting['height']);
				} else {
					$image = $this->model_tool_image->resize('placeholder.png', $setting['width'], $setting['height']);
				}

				if ($this->customer->isLogged() || !$this->config->get('config_customer_price')) {
					$price = $this->currency->format($this->tax->calculate($result['price'], $result['tax_class_id'], $this->config->get('config_tax')), $this->session->data['currency']);
				} else {
					$price = false;
				}

				if ((float)$result['special']) {
					$special = $this->currency->format($this->tax->calculate($result['special'], $result['tax_class_id'], $this->config->get('config_tax')), $this->session->data['currency']);
				} else {
					$special = false;
				}

				if ($this->config->get('config_tax')) {
					$tax = $this->currency->format((float)$result['special'] ? $result['special'] : $result['price'], $this->session->data['currency']);
				} else {
					$tax = false;
				}

				if ($this->config->get('config_review_status')) {
					$rating = $result['rating'];
				} else {
					$rating = false;
				}

				$data['products'][] = array(
					'product_id'  => $result['product_id'],
					'thumb'       => $image,
					'name'        => $result['name'],
					'description' => utf8_substr(trim(strip_tags(html_entity_decode($result['description'], ENT_QUOTES, 'UTF-8'))), 0, $this->config->get('theme_' . $this->config->get('config_theme') . '_product_description_length')) . '..',
					'price'       => $price,
					'special'     => $special,
					'tax'         => $tax,
					'rating'      => $rating,
					'href'        => $this->url->link('product/product', 'product_id=' . $result['product_id'])
				);
			}

		$this->load->model('catalog/information');

    $data['informations'] = array();

    foreach ($this->model_catalog_information->getInformations() as $result) {
      if ($result['bottom']) {
        $data['informations'][] = array(
          'title' => $result['title'],
          'href'  => $this->url->link('information/information', 'information_id=' . $result['information_id'])
        );
      }
    }

		$data['productall'] = $this->url->link('information/information', array('information_id'=>10));

			return $this->load->view('extension/module/productall', $data);
		}
	}
}
