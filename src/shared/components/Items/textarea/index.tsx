import React, { useState,useEffect,useRef } from "react";

import { useSelector } from 'react-redux';
import { getReportDataTemplateItem } from '../../../store/app/selectors';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import css from './textarea.module.css';

const Textarea = (props) => {

  const [id, setId] = useState(props.item.id);
  const [name, setName] = useState(props.item.name);
  const [value, setValue] = useState(useSelector(getReportDataTemplateItem(props.templateId,props.item.id)));
  const [content, setContent] = useState(props.item.content);
  const readonly = false;

  console.debug("textarea",id,name,value,content);

  return (
    <TextareaAutosize
      className={props.class ?? css.default}
      placeholder={props.placeholder}
      minRows={2}
      disabled={readonly}
      id={id}
      name={name}
      readOnly={readonly}
      onChange={(e) => props.handleReportChange(id,e.target.value)}
      value={content}
    />
  );

}

export default Textarea;
