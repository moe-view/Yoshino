
import {Component, ReactNode} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
import Icon from '../Icon';
import Transition from 'react-transition-group/Transition';

export interface IPanelProps extends IBaseComponent {
  /**
   * 标记，对应activekey
   */
  keyId: string;
  /**
   * 折叠板标题
   */
  title: string | ReactNode;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 激活
   */
  active: false;
  /**
   * 变化回调
   */
  onChange: (keyId: string) => void;
}

export interface IPanelState {

}

/**
 * **面板**-折叠版的子项
 */
export class Panel extends Component<IPanelProps, IPanelState> {
  refContent: HTMLElement;
  refInner: HTMLElement;

  static defaultProps = {
    disabled: false,
  };

  onChange = () => {
    const {onChange, disabled, keyId} = this.props;
    if (disabled) {
      return;
    }
    onChange(keyId);
  }

  render() {
    const {className, style, onChange, title, active, children, disabled, ...otherProps} = this.props;
    const preCls = 'yoshino-panel';
    const clsName = classNames(
      className, preCls,
      {
        [`${preCls}-active`]: active,
        [`${preCls}-disabled`]: disabled,
      },
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
        onClick={this.onChange}
      >
        <div className={`${preCls}-title`}>
          <Icon type='ios-arrow-right' className={`${preCls}-icon`}/>
          {title}
        </div>
        <Transition
          timeout={300}
          in={active}
          mountOnEnter
          onEnter={() => {
            this.refContent.style.height = '0px';
            this.refContent.style.display = 'none';
          }}
          onEntering={() => {
            this.refContent.style.display = 'block';
            const height = this.refInner.clientHeight;
            this.refContent.style.height = `${height + 1}px`;
          }}
          onEntered={() => {
            const height = this.refInner.clientHeight;
            this.refContent.style.height = `${height + 1}px`;
          }}
          onExiting={() => {
            this.refContent.style.height = '0px';
          }}
          onExited={() => {
            this.refContent.style.height = '0px';
            this.refContent.style.display = 'none';
          }}
        >
          {
            (state: string) => {
              const contentCls  = classNames(
                `${preCls}-content`,
                {[`${preCls}-content-close`]: state === 'exited'},
              );
              return (
                <div
                  className={contentCls}
                  ref={(v: HTMLElement | null) => {
                    if (v) {
                      this.refContent = v;
                    }
                  }}
                >
                  <div
                    className={`${preCls}-inner`}
                    ref={(v: HTMLElement | null) => {
                      if (v) {
                        this.refInner = v;
                      }
                    }}
                  >
                    {children}
                  </div>
                </div>
              );
            }
          }
        </Transition>
      </div>
    );
  }
}

export default Panel;
