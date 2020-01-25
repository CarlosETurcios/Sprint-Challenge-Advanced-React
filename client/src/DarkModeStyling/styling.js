import React from "react";
import styled from 'styled-components'

const Styling = styled.div`




* {
  box-sizing: border-box;
}

.dark-mode__toggle {
  background: papayawhip;
  border-radius: 50px;
  border: 1px solid black;
  height: 20px;
  position: relative;
  width: 40px;
}

.toggle {
  background: #f68819;
  border-radius: 50px;
  height: 18px;
  left: 0;
  position: absolute;
  transition: 0.2s;
  width: 20px;
}

.toggled {
  left: 18px;
}


.dark-mode {
  color: #fff;
  background-color: #313843;

  .nav {
    background-color: #1F2022;
    border: none;
  }

}





`
export default Styling