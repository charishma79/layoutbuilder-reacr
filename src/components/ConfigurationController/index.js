// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeLeftBar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightBar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-container">
          <h1 className="heading">Layout</h1>
          <div className="input-container">
            <input
              type="checkbox"
              id="content-checkbox"
              value="content"
              className="content"
              onChange={onChangeContent}
            />
            <label htmlFor="content-checkbox" className="content-label">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="left-checkbox"
              value="left-navbar"
              className="left-bar"
              onChange={onChangeLeftBar}
            />
            <label htmlFor="left-checkbox" className="left-label">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="right-checkbox"
              value="right-navbar"
              className="right-bar"
              onChange={onChangeRightBar}
            />
            <label htmlFor="right-checkbox" className="right-label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
