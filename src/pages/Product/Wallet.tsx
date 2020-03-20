import React from 'react';
import { useIntl } from 'umi';
import { Divider } from 'antd';
import QRCode from 'qrcode';

import './style/Wallet.css';

function Wallet() {
  // state = {
  //     qrUrl: 'http://ddnfiles.ebookchain.org/ddn/ddn-wallet-mobile.apk',
  //     qrImgUrl: '',
  // }
  // componentDidMount = () => {
  //     try {
  //         const { qrUrl } = this.state
  //         QRCode.toDataURL(qrUrl, (err, url) => {
  //             if (!err) {
  //                 this.setState({
  //                     qrImgUrl: url,
  //                 })
  //             }
  //         })
  //     } catch (e) {
  //         console.log(e.message)
  //     }
  // }
  // render() {
  const appInfo = {
    version: 'v1.0.0',
    size: '14.9MB',
    update: '2018-11-21 17:58',
  };
  const winInfo = {
    version: 'v1.0.1',
    size: '31.17MB',
    update: '2018-02-27 14:28',
  };
  const macInfo = {
    version: 'v1.0.1',
    size: '31.17MB',
    update: '2018-02-27 14:28',
  };
  const linuxInfo = {
    version: 'v1.0.0',
    size: '31.17MB',
    update: '2018-02-27 14:28',
  };
  const intl = useIntl();
  return (
    <div className="Download">
      <div className="Home-Banner" style={{ flexGrow: '2' }}>
        <div
          className="Content-Width"
          style={{ height: '100%', padding: '0 0 0 20px', textAlign: 'left' }}
        >
          <div className="Home-Banner-Text" style={{ margin: '251px 0 0 0' }}>
            DDN
          </div>
          <div className="Home-Banner-Text2">Data Delivery Network,</div>
          <div className="Home-Banner-Text2">The next generation internet</div>
        </div>
      </div>
      <div className="Content-Width">
        <div className="Download-Title">
          {intl.formatHTMLMessage({ id: 'text_wallet_download_title' })}
        </div>
        {/* <div className="Download-Content">
                        <FormattedMessage id="text_wallet_download_desc"/>
                    </div> */}
        <div style={{ height: '10px' }}></div>
        {/* <p><FormattedMessage id="text_wallet_download_desc2"/><a href="http://ddnfiles.ebookchain.org/ddn/doc/DDN_Wallet_Help.pdf" target="_blank"><FormattedMessage id="text_wallet_download_desc3"/></a></p> */}
        <Divider />
        <div className="Download-Os">
          <img src="/static/images/android.svg" width="38px" />
          <div className="Download-Os-Title" style={{ margin: '0 0 0 40px' }}>
            Android
          </div>
        </div>
        <div className="Download-Os" style={{ height: '105px' }}>
          {/* <div style={{margin: '15px 0 0 80px'}}>
                            <div className="Download-Os-Content"><FormattedMessage id="text_prd_version"/>{appInfo.version}</div>
                            <div className="Download-Os-Content"><FormattedMessage id="text_prd_size"/>{appInfo.size}</div>
                            <div className="Download-Os-Content"><FormattedMessage id="text_prd_update_time"/>{appInfo.update}</div>
                        </div>
                        <div style={{marginLeft: '30px'}}>
                            <img src={this.state.qrImgUrl} className="qrImg" alt="" />
                        </div> */}
        </div>
        <Divider />
        <div className="Download-Os">
          <img src="/static/images/windows_blue.svg" width="38px" />
          <div className="Download-Os-Title" style={{ margin: '0 0 0 40px' }}>
            Windows
          </div>
        </div>
        <div className="Download-Os" style={{ height: '105px' }}>
          {/* <div style={{margin: '15px 0 0 80px'}}>
                            <div className="Download-Os-Content"><FormattedMessage id="text_prd_version"/>{winInfo.version}</div>
                            <div className="Download-Os-Content"><FormattedMessage id="text_prd_size"/>{winInfo.size}</div>
                            <div className="Download-Os-Content"><FormattedMessage id="text_prd_update_time"/>{winInfo.update}</div>
                        </div> */}
          {/* <div style={{flexGrow: '2', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-end', alignItems: 'flex-end', height: '100%', padding: '0 50px 7px 0'}}>
                            <a className="Home-Banner-Button" href="http://ddnfiles.ebookchain.org/ddn/win32/x64/ddn_desktop_win_x64_v1.0.1.exe">
                                <FormattedMessage id="nvarBar_download64"/>
                            </a>
                            <div style={{width: '20px'}}></div>
                            <a className="Home-Banner-Button" href="http://ddnfiles.ebookchain.org/ddn/win32/x32/ddn_desktop_win_x32_v1.0.1.exe">
                                <FormattedMessage id="navBar_download32"/>
                            </a>
                        </div> */}
        </div>
        <Divider />
        <div className="Download-Os">
          <img src="/static/images/mac_blue.svg" width="38px" />
          <div className="Download-Os-Title" style={{ margin: '0 0 0 40px' }}>
            Mac
          </div>
        </div>
        <div className="Download-Os" style={{ height: '105px' }}>
          {/* <div style={{margin: '15px 0 0 80px'}}>
                            <div className="Download-Os-Content"><FormattedMessage id="text_prd_version"/>{macInfo.version}</div>
                            <div className="Download-Os-Content"><FormattedMessage id="text_prd_size"/>{macInfo.size}</div>
                            <div className="Download-Os-Content"><FormattedMessage id="text_prd_update_time"/>{macInfo.update}</div>
                        </div> */}
          {/* <div style={{flexGrow: '2', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-end', alignItems: 'flex-end', height: '100%', padding: '0 50px 7px 0'}}>
                            <a className="Home-Banner-Button" href="http://ddnfiles.ebookchain.org/ddn/osx/x64/ddn_desktop_mac_x64_v1.0.1.dmg">
                                <FormattedMessage id="navBar_download"/>
                            </a>
                        </div> */}
        </div>
        <Divider />
        <div className="Download-Os">
          <img src="/static/images/linux_blue.svg" width="38px" />
          <div className="Download-Os-Title" style={{ margin: '0 0 0 40px' }}>
            Linux
          </div>
        </div>
        {/* <div className="Download-Os" style={{height: '105px'}}>
                        <div style={{margin: '15px 0 0 80px'}}>
                            <div className="Download-Os-Content"><FormattedMessage id="text_prd_version"/>{linuxInfo.version}</div>
                            <div className="Download-Os-Content"><FormattedMessage id="text_prd_size"/>{linuxInfo.size}</div>
                            <div className="Download-Os-Content"><FormattedMessage id="text_prd_update_time"/>{linuxInfo.update}</div>
                        </div>
                        <div style={{flexGrow: '2', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-end', alignItems: 'flex-end', height: '100%', padding: '0 50px 7px 0'}}>
                            <a className="Home-Banner-Button" href="http://ddnfiles.ebookchain.org/ddn/linux/ddn_desktop_linux_x64_v1.0.0.AppImage">
                                <FormattedMessage id="navBar_download"/>
                            </a>
                        </div>
                    </div> */}
        <div style={{ height: '50px' }}></div>
      </div>
    </div>
  );
}

// }

export default Wallet;
