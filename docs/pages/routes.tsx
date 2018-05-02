import Yoshino from './Yoshino';
import Logs from './Logs/index';
import Start from './Start/index';
import Button from './Button';
import Icon from './Icon';
import AutoComplete from './AutoComplete';
import CheckBox from './CheckBox';
import Input from './Input';


export default [
  {
    component: Yoshino,
    path: '/components/yoshino',
  },
  {
    component: Start,
    path: '/components/start',
  },
  {
    component: Logs,
    path: '/components/logs',
  },
  {
    component: Button,
    path: '/components/button'
  },
  {
    component: Icon,
    path: '/components/icon'
  },
  {
    component: AutoComplete,
    path: '/components/autocomplete'
  },
  {
    component: CheckBox,
    path: '/components/checkbox'
  },
  {
    component: Input,
    path: '/components/Input'
  },
];