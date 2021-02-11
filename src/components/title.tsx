import React, { FunctionComponent } from "react"
import * as styles from  '../styles/home.module.scss';

type TitleProps = {
    title: string
  }

  export const Title: FunctionComponent<TitleProps> = ({ title }) => 
  <div className={styles.title}>
      {title}
  </div>