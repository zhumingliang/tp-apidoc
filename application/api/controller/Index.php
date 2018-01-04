<?php

namespace app\api\controller;
use \Rollbar\Rollbar;
use Rollbar\Payload\Level;

class Index
{

    /**
     * @api {POST} /Index/index  接口定义
     * @apiGroup  Groups
     * @apiVersion 0.0.1
     * @apiDescription  Description
     * @apiExample {post}  请求样例:
     *    {
     *       "param-must": "must",
     *       "param-no": "no"
     *     }
     * @apiParam (请求参数说明) {String} param-must    param-description
     * @apiParam (请求参数说明) {String} [param-no] param-description
     *
     * @apiSuccessExample {json} 返回样例:
     *                {"code":1,"msg":"请求成功","content":{"total":8}}
     *
     * @apiSuccess (返回参数说明) {int} code 0 代表无错误 1代表有错误
     * @apiSuccess (返回参数说明) {String} msg 信息
     * @apiSuccess (返回参数说明) {json} content 具体数据
     */
    public function index()
    {
        return 'success1';

    }


    public function test(string $name)
    {
        return $name;

    }


    public function test2()
    {
        $a = 100;
        $b = 100;
        $c = 101;
        $d = 99;
        echo $a <=> $b;
        echo $a <=> $c;
        echo $a <=> $d;
    }

    public function test3()
    {
        return $_POST['name'] ?? $_GET['name'] ?? 0;
    }

    public function test4()
    {
       /* define('arr',['a','b']);
        return arr[0];*/

        Rollbar::init(
            array(
                'access_token' => '5966f10c62424f3ab6379e38a2ea8f91',
                'environment' => 'production'
            )
        );

        try {
            throw new \Exception('这是一个测试的错误');
        } catch (\Exception $e) {
           dump( Rollbar::log(Level::ERROR, $e->getMessage()));
        }
    }


}
