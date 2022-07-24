import React, { Component } from 'react'
import {getSigninUrl} from '../../utils/setting'

export default class login extends Component {
  constructor(){
    super()
    const res=getSigninUrl()
    window.location.href=res
  }
  render() {
    return (
      <div>
        <h4>即将跳转登录页面，请稍后。。。。。。</h4>
      </div>
    )
  }
}
