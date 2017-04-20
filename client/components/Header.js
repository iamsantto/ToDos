import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const Header = props => {
  const position = {
    horizontal: 'right',
    vertical: 'top'
  }

  const iconElement = <IconButton><MoreVertIcon /></IconButton>

  const menuItems = props.menuItems.map(menu =>
    <MenuItem key={menu.option} primaryText={menu.option} onClick={menu.onClick} />
  )

  return (
    <div className="header">
      <Toolbar className="toolbar">
        <ToolbarTitle text={props.title} />
        <IconMenu iconButtonElement={iconElement} anchorOrigin={position} targetOrigin={position}>
          {menuItems}
        </IconMenu>
      </Toolbar>
    </div>
  )
}

export default Header
