import React, { memo, useState, useEffect, useMemo, Component } from "react";
import { Table, Badge, Menu, Dropdown, Space, Button, Input, Spin } from "antd";
import classNames from "classnames";
import moment from "moment";
import _ from "lodash";
import styled from "styled-components";
import * as style from "components/Variables";
import Category1 from "images/category-1.jpg";
import Category2 from "images/category-2.jpg";

const List = memo(({ className, setParams, data, params }) => {
    return (
        <>
            <div className="header-img">
                <div className="img-item">
                    <img src={Category1} />
                    <a className="img-text" href="">
                        <p>Some text goes here that describes the image</p>
                    </a>
                </div>
                <div className="img-item">
                    <img src={Category2} />
                    <a className="img-text" href="">
                        <p>Some text goes here that describes the image</p>
                    </a>
                </div>
            </div>
        </>
    );
});

export default styled(List)`
  // .ant-table-row-expand-icon-cell {
  //   position: sticky;
  //   top: 0;
  //   z-index: 1;
  //   background: red;
  // }
  // .fixDate {
  //   position: sticky;
  //   left: 0px;
  // }
  // .fixRoute {
  //   position: sticky;
  //   left: 120px;
  // }
  // .fixSP {
  //   position: sticky;
  //   left: 300px;
  // }
`;
