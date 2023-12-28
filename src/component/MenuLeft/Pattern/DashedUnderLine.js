import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import { dashedUnderline } from "../../../utils/editorKeyEvents";
import { hotKeys } from "../../../utils/hotkey";

import "../common.css";

@inject("content")
@observer
class DashedUnderLine extends Component {
  handleClick = () => {
    const { markdownEditor } = this.props.content;
    const selection = markdownEditor.getSelection();
    dashedUnderline(markdownEditor, selection);

    // 上传后实时更新内容
    const content = markdownEditor.getValue();
    this.props.content.setContent(content);
    markdownEditor.focus();
  };

  render() {
    return (
      <div
        id="nice-menu-dasded-underline"
        className="nice-menu-item"
        onClick={this.handleClick}
      >
        <span>
          <span className="nice-menu-flag" />
          <span className="nice-menu-name">虚线下划线</span>
        </span>

        <span className="nice-menu-shortcut">{hotKeys.dashedUnderline}</span>
      </div>
    );
  }
}

export default DashedUnderLine;
