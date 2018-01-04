define({ "api": [  {    "type": "POST",    "url": "/Index/index",    "title": "接口定义",    "group": "Groups",    "version": "0.0.1",    "description": "<p>Description</p>",    "examples": [      {        "title": "请求样例:",        "content": "{\n   \"param-must\": \"must\",\n   \"param-no\": \"no\"\n }",        "type": "post"      }    ],    "parameter": {      "fields": {        "请求参数说明": [          {            "group": "请求参数说明",            "type": "String",            "optional": false,            "field": "param-must",            "description": "<p>param-description</p>"          },          {            "group": "请求参数说明",            "type": "String",            "optional": true,            "field": "param-no",            "description": "<p>param-description</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "返回样例:",          "content": "{\"code\":1,\"msg\":\"请求成功\",\"content\":{\"total\":8}}",          "type": "json"        }      ],      "fields": {        "返回参数说明": [          {            "group": "返回参数说明",            "type": "int",            "optional": false,            "field": "code",            "description": "<p>0 代表无错误 1代表有错误</p>"          },          {            "group": "返回参数说明",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>信息</p>"          },          {            "group": "返回参数说明",            "type": "json",            "optional": false,            "field": "content",            "description": "<p>具体数据</p>"          }        ]      }    },    "filename": "application/index/controller/Index.php",    "groupTitle": "Groups",    "name": "PostIndexIndex"  },  {    "type": "POST",    "url": "/register",    "title": "注册用户",    "group": "Users",    "version": "0.0.1",    "description": "<p>用于注册用户</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "account",            "description": "<p>用户账户名</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>密码</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "mobile",            "description": "<p>手机号</p>"          },          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "vip",            "defaultValue": "0",            "description": "<p>是否注册Vip身份 0 普通用户 1 Vip用户</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "recommend",            "description": "<p>邀请码</p>"          }        ]      },      "examples": [        {          "title": "请求样例：",          "content": "?account=sodlinken&password=11223344&mobile=13739554137&vip=0&recommend=",          "type": "json"        }      ]    },    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>信息</p>"          },          {            "group": "200",            "type": "int",            "optional": false,            "field": "code",            "description": "<p>0 代表无错误 1代表有错误</p>"          }        ]      },      "examples": [        {          "title": "返回样例:",          "content": "{\"code\":\"0\",\"msg\":\"注册成功\"}",          "type": "json"        }      ]    },    "filename": "application/index/controller/Index.php",    "groupTitle": "Users",    "name": "PostRegister"  }] });
