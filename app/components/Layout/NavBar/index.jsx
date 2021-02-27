/* eslint-disable no-underscore-dangle */
import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import styled from "styled-components";
import { Breadcrumb, Modal } from "antd";
import { useHistory, Link } from "react-router-dom";
import { defineMessages, FormattedMessage } from "react-intl";
import * as style from "components/Variables";
import { Ui } from "../../../utils/Ui";
import { $Cookies } from "../../../utils/cookies";
const prefix = "app.routing.";
function Footer({ className, pathName, onLogOut, isAuthenticated, profile }) {
  const proFile = $Cookies.get("ERP_REPORT")
    ? JSON.parse($Cookies.get("ERP_REPORT"))
    : {};
  const history = useHistory();

  const _forwardTo = useCallback(
    (to) => {
      history.push(to);
    },
    [history]
  );
  const _handleLogOut = useCallback(() => {
    _forwardTo('/');
    onLogOut();
  }, [_forwardTo, onLogOut]);
  const [visible, setVisible] = useState(false);
  const logOut = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
    Ui.showSuccess({ message: "Đã đăng xuất." });
    onLogOut();
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <Modal
        title="Thông Báo"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        okButtonProps={{
          style: {
            background: "#0bc40b",
            borderRadius: "16px",
            fontWeight: "bold",
            color: "#fff",
          },
        }}
        cancelButtonProps={{
          style: {
            background: "red",
            borderRadius: "16px",
            fontWeight: "bold",
            color: "#fff",
          },
        }}
      >
        <h3 className="text-center">Bạn có thực sự muốn thoát ??</h3>
      </Modal>
      <div className="nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="#" className="navbar-brand">
              MENU
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto">
                <a href="/" className="nav-item nav-link active">
                  Trang chủ
                </a>
                <a href="product-list" className="nav-item nav-link">
                  Sản phẩm
                </a>
                <a href="cart.html" className="nav-item nav-link">
                  Tin tức
                </a>
                <a href="checkout.html" className="nav-item nav-link">
                  Bộ sưu tập
                </a>
              </div>
              <div className="navbar-nav ml-auto">
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {proFile.adm_name && <b>Chào,{proFile.adm_name}</b>}
                  </a>
                  {/* <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a> */}
                  <div className="dropdown-menu">
                    <a href="/my-account" className="dropdown-item">
                      Tài khoản của tôi
                    </a>
                    <a onClick={logOut} className="dropdown-item">
                      Đăng xuất
                    </a>
                  </div>
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

export default styled(
  (Footer)
)`
  padding: 1rem 0 1rem 0;
  a {
    color: ${style.color.haiVan.primary};
    font-weight: bold;
    font-size: ${style.fontsize.reg};
  }
  a:hover {
    color: ${style.color.haiVan.bg} !important;
  }
`;
