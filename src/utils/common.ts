import { ChangeEvent, Dispatch, SetStateAction } from "react";

/**
 * onChange 필터
 * @param e
 * @param setState
 */
export const handleChange = (e: ChangeEvent<HTMLInputElement>, setState: Dispatch<SetStateAction<any>>) => {
  const { name, value } = e.target;

  // do filter...

  // set something...
};
