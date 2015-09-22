<?php
/**
 * @Author: Quinn
 * @Date:   2015-09-22 16:29:19
 * @Last Modified by:   Quinn
 * @Last Modified time: 2015-09-22 16:53:43
 */
    $ch = curl_init();
    $url = 'http://apis.baidu.com/txapi/mvtp/meinv?num=50';
    $header = array(
        'apikey: 89b131a209ed09710194130f4030b82b',
    );
    // 添加apikey到header
    curl_setopt($ch, CURLOPT_HTTPHEADER  , $header);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // 执行HTTP请求
    curl_setopt($ch , CURLOPT_URL , $url);
    $res = curl_exec($ch);

    // var_dump(json_decode($res));
    echo $res;
?>