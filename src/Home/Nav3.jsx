import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu, Dropdown } from 'antd';
import { getLocale, setLocale, useIntl } from 'umi';
import { getChildrenToRender } from './utils';

const { Item, SubMenu } = Menu;

const Header3 = props => {
  const [phoneOpen, setPhoneOpen] = useState('');
  const intl = useIntl();

  const currLang = getLocale();
  const currLangIcon = '/static/' + currLang + '.png';
  const currLangText = intl.formatMessage({ id: currLang });

  const phoneClick = () => {
    setPhoneOpen(!phoneOpen);
  };

  const onSwitchLanguage = lang => {
    setLocale(lang, false);
  };

  const { dataSource, isMobile } = props;
  const navData = dataSource.Menu.children;

  const navChildren = navData.map(item => {
    const { children: a, subItem, ...itemProps } = item;
    if (subItem) {
      return (
        <SubMenu
          key={item.name}
          {...itemProps}
          title={
            <div {...a} className={`header3-item-block ${a.className}`.trim()}>
              {a.children.map(getChildrenToRender)}
            </div>
          }
          popupClassName="header3-item-child"
        >
          {subItem.map(($item, ii) => {
            const { children: childItem } = $item;
            const child = childItem.href ? (
              <a {...childItem}>
                {childItem.children.map(getChildrenToRender)}
              </a>
            ) : (
              <div {...childItem}>
                {childItem.children.map(getChildrenToRender)}
              </div>
            );
            return (
              <Item key={$item.name || ii.toString()} {...$item}>
                {child}
              </Item>
            );
          })}
        </SubMenu>
      );
    }
    return (
      <Item key={item.name} {...itemProps}>
        <a {...a} className={`header3-item-block ${a.className}`.trim()}>
          {a.children.map(getChildrenToRender)}
        </a>
      </Item>
    );
  });
  const moment = phoneOpen === undefined ? 300 : null;

  const menuLang = (
    <Menu>
      <Menu.Item>
        <div
          className="Header-Language-Menu-Item"
          onClick={onSwitchLanguage.bind(this, 'zh-CN')}
        >
          <img
            src="/static/zh-CN.png"
            width="16px"
            className="Header-Language-Menu-Icon"
          />
          {intl.formatMessage({ id: 'zh-CN' })}
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          className="Header-Language-Menu-Item"
          onClick={onSwitchLanguage.bind(this, 'en-US')}
        >
          <img
            src="/static/en-US.png"
            width="16px"
            className="Header-Language-Menu-Icon"
          />
          {intl.formatHTMLMessage({ id: 'en-US' })}
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...dataSource.wrapper}
      {...props}
    >
      <div
        {...dataSource.page}
        className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
      >
        <TweenOne
          animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
          {...dataSource.logo}
        >
          <img width="100%" src={dataSource.logo.children} alt="img" />
        </TweenOne>
        {isMobile && (
          <div
            {...dataSource.mobileMenu}
            onClick={() => {
              phoneClick();
            }}
          >
            <em />
            <em />
            <em />
          </div>
        )}
        <TweenOne
          {...dataSource.Menu}
          animation={
            isMobile
              ? {
                  x: 0,
                  height: 0,
                  duration: 300,
                  onComplete: e => {
                    if (phoneOpen) {
                      e.target.style.height = 'auto';
                    }
                  },
                  ease: 'easeInOutQuad',
                }
              : null
          }
          moment={moment}
          reverse={!!phoneOpen}
        >
          <Menu
            mode={isMobile ? 'inline' : 'horizontal'}
            defaultSelectedKeys={['item0']}
            theme="light"
          >
            {navChildren}
          </Menu>
          <Dropdown overlay={menuLang}>
            <div className="Header-Language-Menu-Item">
              <img
                src={currLangIcon}
                width="16px"
                className="Header-Language-Menu-Icon"
              />
              {currLangText}
            </div>
          </Dropdown>
        </TweenOne>
      </div>
    </TweenOne>
  );
};

export default Header3;
