import * as React from 'react';
import { Component } from 'react';
import * as md from './index.md';
import Markdown from '../../components/Markdown/';
import CodeBox from '../../components/CodeBox/';
import ApiBox from '../../components/ApiBox/';
import Api from './api';

import TransitionsDemo from './demo/transitionsDemo';
import * as transitionsDemoMd from './demo/transitionsDemo.md';
const transitionsDemoCode = require('!raw-loader!./demo/transitionsDemo');

import TransitionsCustom from './demo/transitionsCustom';
import * as transitionsCustomMd from './demo/transitionsCustom.md';
const transitionsCustomCode = require('!raw-loader!./demo/transitionsCustom');

import TransitionsScale from './demo/transitionsScale';
import * as transitionsScaleMd from './demo/transitionsScale.md';
const transitionsScaleCode = require('!raw-loader!./demo/transitionsScale');

export default class TransitionsPage extends Component {
  render() {
    return (
      <div>
        <Markdown text={md}/>
        <CodeBox text={transitionsDemoMd} demo={<TransitionsDemo/>} code={transitionsDemoCode}/>

        <CodeBox text={transitionsCustomMd} demo={<TransitionsCustom/>} code={transitionsCustomCode}/>

        <CodeBox text={transitionsScaleMd} demo={<TransitionsScale/>} code={transitionsScaleCode}/>
        <ApiBox api={Api}/>
      </div>
    );
  }
}
