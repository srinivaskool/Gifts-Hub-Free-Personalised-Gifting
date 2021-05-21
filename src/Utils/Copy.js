import React, { useState } from "react";
import useClipboard from "react-use-clipboard";

import HeaderBtn from "../Studio/HeaderBtn";
import FileCopyIcon from "@material-ui/icons/FileCopy";
export default function Copy({ livelink }) {
  const [isCopied, setCopied] = useClipboard(`${livelink}`, {
    // `isCopied` will go back to `false` after 1000ms.
    successDuration: 1000,
  });
  return (
    <div className="App">
      <HeaderBtn
        Icon={FileCopyIcon}
        title={isCopied ? "link Copied! 👍" : "Copy link to Clipboard"}
        handleClick={setCopied}
      />
    </div>
  );
}
