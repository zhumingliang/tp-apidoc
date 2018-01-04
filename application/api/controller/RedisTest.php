<?php
/**
 * Created by PhpStorm.
 * User: zhumingliang
 * Date: 2017/12/16
 * Time: 下午9:54
 */

namespace app\api\controller;

use think\cache\driver\Redis;

class RedisTest
{
    public function demo1()
    {
        $redis = new \Redis();
        $redis->connect('127.0.0.1', 6379);

        $redis->zAdd('score', '100', 'article:002');
        // $score= $redis->zRangeByScore('score',0,-1,array('withscores' => TRUE));
        $score = $redis->zRange('score', 0, -1, true);

        foreach ($score as $k => $v) {
            if ($k == "article:002") {
                $redis->zAdd('score', $v + 100, $k);

            }

        }

        print_r($score = $redis->zRange('score', 0, -1, true)
    );
    }

    public function demo2()
    {
        $redis = new \Redis();
        $redis->connect('127.0.0.1', 6379);

       
    }


}