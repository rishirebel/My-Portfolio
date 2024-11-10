import React, { useEffect, useState } from "react";
import { useDencrypt } from "use-dencrypt-effect";

const decryptOptions = {
    chars: ["-", ".", "/", "*", "!", "?", "#", "%", "&", "@", "$", "€", "(", ")", "[", "]", "{", "}", "<", ">", "~", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    interval: 90,
};

export const TextDecrypt = React.memo(({ text }) => {
    const { result, dencrypt } = useDencrypt(decryptOptions);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (result !== text && !isComplete) {
            dencrypt(text);
        } else if (result === text) {
            setIsComplete(true);
        }
    }, [result, text, dencrypt, isComplete]);

    return (
        <p>
          {result}
          {" "}
        </p>
    );
});
