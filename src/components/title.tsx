import React, { FunctionComponent } from "react"
import * as styles from  '../styles/title-component.module.scss';

type TitleProps = {
    title: string
  }

  export const Title: FunctionComponent<TitleProps> = ({ title }) => 
  <div className={styles.title}>
      {title}
  </div>