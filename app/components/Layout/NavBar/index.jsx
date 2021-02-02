/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { defineMessages, FormattedMessage } from 'react-intl';
import * as style from 'components/Variables';
import { $Cookies } from "../../../utils/cookies";
const prefix = 'app.routing.';
function Footer({ className, pathName }) {
    const proFile = $Cookies.get("ERP_REPORT")
      ? JSON.parse($Cookies.get("ERP_REPORT"))
      : {};
  return (
    <>
        <div className="nav">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="#" className="navbar-brand">MENU</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <a href="index.html" className="nav-item nav-link active">Trang chủ</a>
                            <a href="index.html" className="nav-item nav-link">Hàng mới</a>
                            <a href="product-list.html" className="nav-item nav-link">Sản phẩm</a>
                            <a href="product-detail.html" className="nav-item nav-link">Giới thiệu</a>
                            <a href="cart.html" className="nav-item nav-link">Tin tức</a>
                            <a href="checkout.html" className="nav-item nav-link">Bộ sưu tập</a>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">{proFile.adm_name && <b>Chào,{proFile.adm_name}</b>}</a>
                                {/* <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a> */}
                                {/* <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Login</a>
                                    <a href="#" className="dropdown-item">Register</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </>
  );
}

Footer.propTypes = {
  classNameNameName: PropTypes.any,
  pathName: PropTypes.any,
};

export default memo(styled(Footer)`
  padding: 1rem 0 1rem 0;
  a {
    color: ${style.color.haiVan.primary};
    font-weight: bold;
    font-size: ${style.fontsize.reg};
  }
  a:hover {
    color: ${style.color.haiVan.bg} !important;
  }
`);
