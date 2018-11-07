import * as React from "react";
import { tbody, tr, td, table, th, thead, trBody, container } from "./css";

// https://uxdesign.cc/design-better-data-tables-4ecc99d23356

const cols: number = 20;

interface IProps {}

interface IState {}

class Table extends React.Component<IProps, IState> {
  static defaultProps = {};

  constructor(props: IProps) {
    super(props);
  }

  castShadow = () => {
    this.setState({ castShadow: true });
  };

  render() {
    return (
      <>
        <div>
          <input type="text" />
        </div>
        <table className={table}>
          <thead className={thead}>
            <tr className={tr}>
              {[...Array(cols)].map((e, i) => (
                <th key={i} className={th}>
                  1
                </th>
              ))}
            </tr>
          </thead>
          <tbody onScroll={this.castShadow} className={tbody}>
            {[...Array(100)].map((e, i) => (
              <tr key={i} className={`${trBody} body`}>
                {[...Array(cols)].map((e, i) => (
                  <td key={i} className={td}>
                    1
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
