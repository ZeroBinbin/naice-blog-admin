import React, { useState } from 'react'
import { Menu, Icon } from 'antd'
import { menuConfig, menuType } from './menu-config'
import { RouterProps } from 'react-router'
// import { ClickParam } from 'antd/es/menu/index.d'
const { SubMenu } = Menu
interface menuProps{
  collapsed: boolean
}
export default function Munu(props: (menuProps & RouterProps)) {
  const { collapsed } = props
  let click = (path?: string) => {
    if (path) {
      props.history.push(path)
    }
  }
  return (
    <Menu
      theme='dark'
      defaultSelectedKeys={['home']}
      defaultOpenKeys={['home']}
      mode="inline"
      className="menu"
      inlineCollapsed={collapsed}
    >
      {
        menuConfig.map((menu: menuType) => {
          if (!menu.children) {
            return <Menu.Item key={menu.key} onClick={() => click(menu.path)}>
              <Icon type={menu.icon} />
              <span>{menu.title}</span>
            </Menu.Item>
          } else {
            return (
              <SubMenu
                key={menu.key}
                title={
                  <span>
                    <Icon type={menu.icon} />
                    <span>{menu.title}</span>
                  </span>
                }
              >
                {
                  menu.children.map((item: menuType) => <Menu.Item key={item.key} onClick={() => click(item.path)}>{item.title}</Menu.Item>)
                }
              </SubMenu>
            )
          }
        })
      }
    </Menu>
  )
}
