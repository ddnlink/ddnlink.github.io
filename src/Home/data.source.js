import React from 'react';
import logoB from '../assets/images/logoB.png';
import logo from '../assets/images/logo_white.png';
import wallet_image from '../assets/images/logo_white.png';
import case_ebookchain from '../assets/images/case_ebookchain.png';
import case_limschain from '../assets/images/case_limschain.png';
import case_e_tour from '../assets/images/case_e_tour.png';
import case_network from '../assets/images/case_network.png';
import case_system from '../assets/images/case_system.png';

let visual_image = '/visual_image.svg';
let visual_hover = '/visual_hover.svg';
let service_image = '/service_image.svg';
let service_hover = '/service_hover.svg';
let multi_image = '/multi_image.svg';
let multi_hover = '/multi_hover.svg';

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo k7ucziv2qjk-editor_css',
    children: logoB,
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: 'http://docs.ddn.link',
          children: [
            {
              children: (
                <>
                  <p>文档</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <>
                  <p>社区</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: 'http://ubl.ddn.link',
          children: [
            {
              children: (
                <>
                  <p>课程</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
      },

      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <>
                  <p>产品</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            name: 'sub~k7x691wur9',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
     
                {
                  name: 'title',
                  className: 'item-title',
                  children: '浏览器',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '查看区块链数据',
                },
              ],
            },
          },
          {
            name: 'sub~k7x691wupj6',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: '钱包',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '通过区块链管理资产',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};

export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>区块链敏捷开发框架</p>
          </>
        ),
        className: 'banner5-title',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <>
            <p>帮杰出的企业更杰出</p>
          </>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <>
            <p>共商、共享、共建、共赢</p>
          </>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: 'http://docs.ddn.link/#/guide/get-started',
          className: 'banner5-button',
          type: 'primary',
          children: '开始使用',
          target: '_blank',
        },
      },
    ],
  },
  image: {
    className: 'banner5-image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
  },
};

// 核心技术
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>核心技术</p>
          </>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          title: 'block0',
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: visual_image,
              children_hover: visual_hover
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>可视化定制</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>
                    让没有接触过区块链技术的用户，也能根据自己的需求，轻点鼠标定制出自己需要的区块链产品。
                  </p>
                </>
              ),
              className: 'k7ukkevkbc6-editor_css',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          title: 'block1',
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: service_image,
              children_hover: service_hover,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>微服务+模块化</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>
                    功能模块优化到最小粒度，让开发更简单；提供了侧链、链上资产等丰富的应用接口，方便不同的需求进行扩展。
                  </p>
                </>
              ),
              className: 'k7uklnth9ms-editor_css',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          title: 'block2',
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: multi_image,
              children_hover: multi_hover,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>多链并行+跨链互通</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>
                    有效解决区块膨胀难题，鼓励每条链服务一个场景，跨链技术实现链和链之间数据资产的交易，融合海量应用场景。
                  </p>
                </>
              ),
              className: 'k7ukmfuvtit-editor_css',
            },
          ],
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>服务领域</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <>
            <p>7 大行业 15 个场景</p>
          </>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>文化娱乐</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  独创版权协议和版权历史记录，提供“一键注册”的快捷确权服务。
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>健康医疗</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  应用于疾控监管、临床试验、药品流通、健康大数据的挖掘等多种医疗应用场景。
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>政务管理</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  快速开发电子票据、党建积分、文件管理、远程协作、精准扶贫等。
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>金融保险证券</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  为商业银行、企业、大型商业机构等提供区块链数字票据服务，追踪资金流向，增强金融监管。
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>物联网</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  构建大型物联网络，控制管理大量的物理设备，为各类生产企业研发强大的设备管理系统。
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '大数据' },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>区块链是分布式账本，为一些大数据公司提供底层技术支持。</p>
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>经典案例</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <>
            <p>用技术服务实体</p>
          </>
        ),
      },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: {
            className: 'content7-tag-name',
            children: (
              <>
                <p>检测平台</p>
              </>
            ),
          },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <h3>LIMSChain 亿检链</h3>
                <p>
                  <b>全国首款基于区块链的检验检测平台</b>。<span>
                    该产品符合国家国际标准，可有效帮助检验检测机构提高效率、降低成本，提升检验检测机构信息化水平，充分利用区块链安全、可追溯的特点，在保证检测数据脱敏，保护检测企业数据安全的基础上，打通检验检测机构内部的数据壁垒，实现内部数据和业务的互联共通，给检验检测机构赋能，为检测数据赋值。
                  </span>
                </p>
                <p>
                  <br />
                </p>
                <p>
                  LIMSChain检验检测系统是我司自主研发，底层区块链首批通过国家权威机构可信区块链测试，应用层符合国家标准，场景覆盖疾控、食品、药品、环境、消防、计量等多个行业的检测实验室，包含样品、检测、质控、文档、库存等几十个基础管理模块，简单易用。
                </p>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children: case_limschain,
          },
        },
      },
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <>
                <p>文创平台</p>
              </>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>让有知识的人富起来</h3>
                </span>
                <span>
                  <p>
                    <span>
                      亿书，Ebookchain，首款基于区块链的版权保护与知识分销系统。它坚守“让有知识的人富起来”的使命，通过DDN区块链实现文本、图片、视频的确权、授权和维权，打通了原创作者，从文本创作到知识分发，再到版权转化和交易的全过程。该系统提供了文本写作、链上存证、媒体号、去中心化博客（网站）等极具创新的功能，已经成为众多作家、音乐人和知识服务商创新创富的利器
                    </span>
                    <span>。</span>
                    <br />
                  </p>
                </span>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            children: case_ebookchain,
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <>
                <p>智慧旅游</p>
              </>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>让游客挣钱的旅游系统</h3>
                  <p>
                    智慧旅游，让游客在旅游中挣钱。它是一个以用户亲身经历的旅游方案销售为创新点的新式旅游平台，以游客为中心，把游客经历的导游、地接、旅行社、景点、酒店、商场、交通等每个环节的服务，快速地整合成物美价廉的旅游方案，并可直接出售该方案，从而把整个旅游业态纳入该平台，从而帮助大量中、小、微旅游及其相关企业更加轻松地开展互联网营销，提升企业经营水平，提高效率，提升竞争力，同时给游客提供更好的旅游体验。<br />
                  </p>
                  <h3>
                    <br />
                  </h3>
                </span>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children: case_e_tour,
          },
        },
      },
      {
        name: 'elem~k7x4vx9hhqu',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <>
                <p>智能微网</p>
              </>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>
                    区块链助力新能源<br />
                  </h3>
                  <p>
                    智能微网是基于区块链，由分布式电源、储能装置、能量转换装置、计量装置等组成的小型发电、配电和交易系统。智能微网为光伏发电小区、海岛微网、边防林牧场、智慧小镇、西部不通电地区、农村微网等带来福音。利用可再生能源（风能、光伏），将光伏发电、配置储能系统，通过区块链让买家、卖家自由地在系统内买卖电力。居民和本地的智能电网可以使用数字货币进行交易。
                  </p>
                </span>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children: case_network,
          },
        },
      },
      {
        name: 'elem~k7x5a1fxcdt',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <>
                <p>券式系统</p>
              </>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>
                    链上期货系统<br />
                  </h3>
                  <p>
                    区块链+金融，国内第一个链上期货系统。它借助DDN区块链技术，实现了链上发售代金券、购物卡等功能，帮助商家便捷的销售自己的商品，方便消费者提前买到大闸蟹、东北大米等稀缺的商品，及时转让手中未能消费的代金券或购物卡等。该产品已经被某地方政府用于销售当地著名的土特产，在广大的农村市场，为保障农民收益、扩大农民创收探索出了一条颠覆性的创新之路。
                  </p>
                </span>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children: case_system,
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: logo,
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: '用区块链技术解决人类信任问题',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '产品更新记录' },
            { name: 'link1', href: '#', children: 'API文档' },
            { name: 'link2', href: '#', children: '快速入门' },
            { name: 'link3', href: '#', children: '参考指南' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            {
              href: 'https://github.com/ddnlink',
              name: 'link0',
              children: (
                <>
                  <p>
                    https://github.com/ddnlink<br />
                  </p>
                </>
              ),
            },
            {
              href: 'emailto:',
              name: 'link1',
              children: (
                <>
                  <p>商务合作: operation@ddn.link</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <>
              <p>更多信息</p>
            </>
          ),
        },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Facebook' },
            { href: '#', name: 'link1', children: 'Tiwtter' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>
          ©2020 by <a href="https://ddn.link">DDN FOUNDATION</a> All Rights
          Reserved
        </span>
      </>
    ),
  },
};
