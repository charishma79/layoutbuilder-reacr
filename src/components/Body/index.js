// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-bar-container">
              <h1 className="content-text">Left Navbar Menu</h1>
              <ul className="items-container">
                <li className="item-1">Item 1</li>
                <li className="item-1">Item 2</li>
                <li className="item-1">Item 3</li>
                <li className="item-1">Item 4</li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div className="content-container">
              <h1 className="content-text">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          ) : (
            ''
          )}
          {showRightNavbar ? (
            <div className="right-bar-container">
              <h1 className="content-text">Right Navbar</h1>
              <div className="ad-bg-container">
                <div className="ad-container">
                  <p className="ad-1">Ad 1</p>
                </div>
                <div className="ad-container">
                  <p className="ad-1">Ad 2</p>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
