import React, { FunctionComponent } from "react"
const styles = require('../styles/home.module.scss');

type TitleProps = {
    title: string
  }

  export const Title: FunctionComponent<TitleProps> = ({ title }) => 
  <div className={styles.title}>
      {title}
  </div>