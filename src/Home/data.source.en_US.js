import React from 'react';

import logoB from '../assets/images/logoB.png';
import logo from '../assets/images/logo_white.png';
import case_ebookchain from '../assets/images/case_ebookchain.png';
import case_limschain from '../assets/images/case_limschain.png';
import case_hbl from '../assets/images/case_hbl.png';
import case_e_tour from '../assets/images/case_e_tour.png';
import case_network from '../assets/images/case_network.png';
import case_system from '../assets/images/case_system.png';
import wallet from '../assets/images/wallet.png';
import browser from '../assets/images/browser.png';

let visual_image = '/static/visual_image.svg';
let visual_hover = '/static/visual_hover.svg';
let service_image = '/static/service_image.svg';
let service_hover = '/static/service_hover.svg';
let multi_image = '/static/multi_image.svg';
let multi_hover = '/static/multi_hover.svg';
let health = '/static/health.svg';
let bigdata = '/static/bigdata.svg';
let culture = '/static/culture.svg';
let finance = '/static/finance.svg';
let government = '/static/government.svg';
let Iot = '/static/Iot.svg';

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
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '/',
          children: [
            {
              children: (
                <>
                  <p>Home</p>
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
          href: 'http://datm.ddn.link',
          children: [
            {
              children: (
                <>
                  <p>Community</p>
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
          href: 'http://docs.ddn.link',
          children: [
            {
              children: (
                <>
                  <p>Docs</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
      },

      // {
      //   name: 'item3',
      //   className: 'header3-item',
      //   children: {
      //     href: 'http://ubl.ddn.link',
      //     children: [
      //       {
      //         children: (
      //           <>
      //             <p>Courses</p>
      //           </>
      //         ),
      //         name: 'text',
      //       },
      //     ],
      //   },
      // },

      {
        name: 'item4',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <>
                  <p>Products</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              href: 'http://mainnet.ddn.link',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children: browser,
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Browser（mainnet）',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'View blockchain mainnet data.',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              href: 'http://testnet.ddn.link',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children: browser,
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Browser（testnet）',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'View latest blockchain testnet data.',
                },
              ],
            },
          },
          {
            name: 'sub2',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              href: 'http://wallet.ddn.link',
              children: [
                {
                  name: 'image1',
                  className: 'item-image',
                  children: wallet,
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Wallet',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'Manage assets through blockchain',
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
            <p>Blockchain agile development framework</p>
          </>
        ),
        className: 'banner5-title',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <>
            <p>Help outstanding enterprises more outstanding</p>
          </>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <>
            <p>Discuss, Share, Build and Win together</p>
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
          children: 'Get starting',
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
            <p>Core Technologies</p>
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
              children_hover: visual_hover,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>Visual customization</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>
                    Users who have not been exposed to blockchain technology can
                    also customize their own blockchain products according to
                    their own needs with a click of the mouse.
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
                  <p>Microservice + Modularization</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>
                    The module is optimized to the minimum granularity, which
                    makes the development easier; provides rich APIs such as
                    sidechain and AoB, which facilitates the expansion of
                    different requirements.
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
                  <p>Multi-Chain parallel + Cross-chain interworking</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>
                    Encourage each blockchain to serve one scenario, cross-chain
                    technology to realize the transaction of assets between
                    blockchains, and integrate massive application scenarios.
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

// 服务领域
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
            <p>Service areas</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <>
            <p>15 scenarios in 7 industries</p>
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
            children: culture,
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>Copyright creation</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  Create original copyright agreement and copyright history, and
                  provide "one click registration" confirmation service.
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
            children: health,
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>Health care</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  Be used in many medical application scenarios, such as disease
                  control supervision, clinical trials, drug circulation, health
                  big data mining, etc.
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
            children: government,
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>Government administration</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  Rapid development of electronic bills, Party construction
                  points, document management, remote cooperation, targeted
                  poverty alleviation, etc.
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
            children: finance,
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>Financial and insurance</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  Provide blockchain digital bill services for commercial banks,
                  enterprises, large commercial institutions, etc., track the
                  flow of funds, and strengthen financial supervision.
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
            children: Iot,
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>IoT</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  Build a large-scale IOT network, control and manage a large
                  number of physical equipment, and develop a powerful equipment
                  management system for all kinds of production enterprises.
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
            children: bigdata,
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: 'Big Data',
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  Provide the underlying technical support for some companies.
                </p>
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
            <p>Classic cases</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <>
            <p>Technical service entity</p>
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
                <p>智慧党建</p>
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
                <h3>红榜链——山东诸城市委主办</h3>
                <p>
                  <b>全国首款基于区块链的智慧党建信用平台</b>。
                  <span>
                    本案例从党员信用积分出发，构建党建管理+实体经济体系。传统的党员积分管理，都是党组织评价党员，是自上而下的管理模式，党组织任务重，积极性不高，党员反感不配合问题多，所以党员评价管理基本上都是不了了之。
                  </span>
                </p>
                <p>
                  <br />
                </p>
                <p>
                  本案例借助区块链公开、透明、不可篡改的特性，将党员评价和积分的权利下放给每个党员，通过排行和积分记录党员个人信用，党组织仅制定规则、发现纠正问题，变被动为主动、变他评为自评，公正、可信，大大提高党员积极性和主动性，是一种新尝试。
                </p>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children: case_hbl,
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: {
            className: 'content7-tag-name',
            children: (
              <>
                <p>Detection platform</p>
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
                <h3>LIMSChain</h3>
                <p>
                  <b>
                    The first inspection and detection platform based on
                    blockchain in China
                  </b>
                  。
                  <span>
                    This product conforms to the national and international
                    standards, which can effectively help the inspection and
                    testing institutions to improve efficiency, reduce costs,
                    improve the information level of inspection and testing
                    institutions, break through the data barriers inside the
                    inspection and testing institutions, realize the
                    interconnection of internal data and business, empower the
                    inspection and testing institutions, and assign values to
                    the inspection data.
                  </span>
                </p>
                <p>
                  <br />
                </p>
                <p>
                  The application layer complies with gb17025 standard. The
                  scene covers the testing laboratories of disease control,
                  food, medicine, environment, fire control, measurement and
                  other industries, including dozens of basic management modules
                  such as samples, testing, quality control, documents,
                  inventory, etc. it is simple and easy to use.
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
        name: 'block3',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <>
                <p>Literary creation platform</p>
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
                  <h3>Make people rich with knowledge</h3>
                </span>
                <span>
                  <p>
                    <span>
                      Ebookchain，The first blockchain based copyright
                      protection and knowledge distribution system. It adheres
                      to the mission of "making people rich with knowledge",
                      realizes the confirmation, authorization and protection of
                      text, pictures and videos, and gets through the whole
                      process of original authors, from text creation to
                      knowledge distribution, to copyright transformation and
                      transaction.
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
        name: 'block4',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <>
                <p>Smart Tourism</p>
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
                  <h3>A tourism system for tourists to earn money</h3>
                  <p>
                    Smart tourism makes tourists earn money in tourism. It is a
                    new-type tourism platform with the sales of tourism schemes
                    experienced by users as the innovation point. It takes
                    tourists as the center, integrates the services experienced
                    by tourists into a cheap and high-quality tourism scheme
                    quickly, and can sell the scheme directly.
                    <br />
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
        name: 'block5',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <>
                <p>Intelligent microgrid</p>
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
                    Blockchain helps new energy
                    <br />
                  </h3>
                  <p>
                    Intelligent microgrid is a small power generation,
                    distribution and trading system composed of distributed
                    power supply, energy storage device, energy conversion
                    device, metering device, etc. Smart micro network brings
                    good news for photovoltaic power generation community,
                    island micro network, border forest and pasture, Smart Town,
                    western regions without electricity, rural micro network,
                    etc. Through blockchain, buyers and sellers can freely buy
                    and sell electricity in the system.
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
        name: 'block6',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <>
                <p>Coupon system</p>
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
                    Futures system on blockchain
                    <br />
                  </h3>
                  <p>
                    Blockchain + finance, the first on chain futures system in
                    China. It has realized the functions of selling vouchers and
                    shopping cards on the chain, helping businesses to sell
                    their own goods conveniently, facilitating consumers to buy
                    hairy crabs, northeast rice and other scarce goods in
                    advance, and transferring the vouchers or shopping cards
                    that are not consumed in time.
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
              children: 'Blockchain solve the problem of human trust',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Product' },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: 'https://github.com/ddnlink/ddn/releases',
              children: 'Product update record',
            },
            {
              name: 'link1',
              href: 'http://docs.ddn.link/#/api',
              children: 'API',
            },
            {
              name: 'link2',
              href: 'http://docs.ddn.link/#/guide',
              children: 'Get start',
            },
            {
              name: 'link3',
              href: 'http://docs.ddn.link/#/docs',
              children: 'Guide',
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'About' },
        childWrapper: {
          children: [
            {
              href: 'https://github.com/ddnlink',
              name: 'link0',
              children: (
                <>
                  <p>
                    https://github.com/ddnlink
                    <br />
                  </p>
                </>
              ),
            },
            {
              href: 'emailto:',
              name: 'link1',
              children: (
                <>
                  <p>Business cooperation: operation@ddn.link</p>
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
              <p>More</p>
            </>
          ),
        },
        childWrapper: {
          children: [
            {
              href: 'https://www.facebook.com/DDNlink',
              name: 'link0',
              children: 'Facebook',
            },
            {
              href: 'https://twitter.com/DDN_link',
              name: 'link1',
              children: 'Twitter',
            },
            {
              href: 'https://t.me/joinchat/H-kmwQ0dbU9fofIgd1nvVg',
              name: 'link2',
              children: 'Telegram',
            },
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
