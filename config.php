<?php
// HTTP
define('HTTP_SERVER', 'http://iamtoko.loc/');

// HTTPS
define('HTTPS_SERVER', 'http://iamtoko.loc/');

// DIR
define('DIR_APPLICATION', 'E:/OpenServer/domains/iamtoko.loc/catalog/');
define('DIR_SYSTEM', 'E:/OpenServer/domains/iamtoko.loc/system/');
define('DIR_IMAGE', 'E:/OpenServer/domains/iamtoko.loc/image/');
define('DIR_STORAGE', 'E:/OpenServer/domains/storage/');
define('DIR_LANGUAGE', DIR_APPLICATION . 'language/');
define('DIR_TEMPLATE', DIR_APPLICATION . 'view/theme/');
define('DIR_CONFIG', DIR_SYSTEM . 'config/');
define('DIR_CACHE', DIR_STORAGE . 'cache/');
define('DIR_DOWNLOAD', DIR_STORAGE . 'download/');
define('DIR_LOGS', DIR_STORAGE . 'logs/');
define('DIR_MODIFICATION', DIR_STORAGE . 'modification/');
define('DIR_SESSION', DIR_STORAGE . 'session/');
define('DIR_UPLOAD', DIR_STORAGE . 'upload/');

// DB
define('DB_DRIVER', 'mysqli');
define('DB_HOSTNAME', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_DATABASE', 'iamtoko');
define('DB_PORT', '3306');
define('DB_PREFIX', 'oc_');