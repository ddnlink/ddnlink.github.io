import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { getLocale, setLocale, useIntl } from 'umi';
import { getChildrenToRender } from './utils';
import { UnorderedListOutlined } from '@ant-design/icons';

const { Item, SubMenu } = Menu;

const Header3 = props => {
  const [phoneOpen, setPhoneOpen] = useState('');
  const intl = useIntl();

  const currLang = getLocale();
  // 目前仅支持中英文切换
  const lang = currLang === 'zh-CN' ? 'en-US' : 'zh-CN';
  const currLangIcon = '/static/' + lang + '.png';
  const currLangText = intl.formatMessage({ id: lang });

  const phoneClick = () => {
    setPhoneOpen(!phoneOpen);
  };

  const onSwitchLanguage = () => {
    setLocale(lang, true);
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

  // 添加自定义的其他按钮
  let additional = null;
  const additionalItems = [
    <Item key="switch-lang" onClick={onSwitchLanguage}>
      <img
        src={currLangIcon}
        width="16px"
        className="Header-Language-Menu-Icon"
      />
      {currLangText}
    </Item>,
  ];

  if (isMobile) {
    additional = additionalItems;
  } else {
    additional = (
      <SubMenu key="additional" title={<UnorderedListOutlined />}>
        {additionalItems}
      </SubMenu>
    );
  }

  navChildren.push(additional);

  const moment = phoneOpen === undefined ? 300 : null;

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
        </TweenOne>
      </div>
    </TweenOne>
  );
};

export default Header3;
