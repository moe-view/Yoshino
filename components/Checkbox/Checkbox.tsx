
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
import CheckboxGroup from './CheckboxGroup';

// tslint:disable:no-any
export interface ICheckboxProps extends IBaseComponent {
  /**
   * 值
   */
  value: any;
  /**
   * 是否选中
   */
  checked: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 组名
   */
  name: string;
  /**
   * 通知checkboxGroup
   */
  onChange: (value: any) => void;
}

export interface ICheckboxState {

}

/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
export class Checkbox extends Component<ICheckboxProps, ICheckboxState> {
  static defaultProps = {
    disabled: false,
  };

  onChange = (value: any) => {
    const {onChange, disabled} = this.props;
    if (disabled) {
      return;
    }
    onChange(value);
  }

  static Group: typeof CheckboxGroup;

  render() {
    const {className, style, name, value, checked, disabled, children, onChange, ...otherProps} = this.props;
    const preCls = 'yoshino-checkbox';
    const clsName = classNames(
      className, preCls,
      {[`${preCls}-checked`]: checked},
    );
    const wrapperCls = classNames(
      `${preCls}-wrapper`,
      {[`${preCls}-disabled`]: disabled},
    );
    return (
      <span
        className={wrapperCls}
        onClick={this.onChange.bind(this, value)}
      >
        <span className={`${preCls}-box`}>
          <span
            className={clsName}
            style={style}
            {...otherProps}
          />
          <input type='checkbox' className={`${preCls}-input`} {...{name, value, checked}}/>
        </span>
        <span className={`${preCls}-text`}>{children}</span>
      </span>
    );
  }
}

export default Checkbox;
