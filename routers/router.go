package routers

import (
	"github.com/astaxie/beego"
	"openitem/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
}
