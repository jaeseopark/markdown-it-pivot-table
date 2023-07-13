const RE_SOURCE = /^<BEGIN SOURCE --render=(.*)>$([\s\S]*)^<END SOURCE>$/;
const RE_PIVOT = /^<BEGIN PIVOT(.*)>$([\s\S]*)^<END PIVOT>$/;

const usePivotTable = (md) => {
  //md.inline.ruler.push
  // md.block.ruler.push()

  md.inline.ruler.push("pivot_table", (state, silent) => {
    const {
      md: { inline },
      src,
    } = state;
    let { pos, posMax } = state;

    const match = state.src.match(RE_SOURCE);

    while (pos < posMax) {
      const match = src.match(RE_SOURCE);
      if (match) {
        console.log(match);
      }
      pos++;

      //   inline.skipToken(state);
    }

    console.log(src);

    // for (let idx = 1; idx < tokens.length; idx++) {
    //   const token = tokens[idx];
    //   const { type, content } = token;
    //   if (
    //     isSearchingSourceTable &&
    //     type === "table_open" &&
    //     lastInlineContent
    //   ) {
    //     const match = lastInlineContent.match(RE_BEGIN_SOURCE);
    //     if (match) {
    //       isDigestingSource = true;
    //       shouldShowSourceTable = match[1].trim().toLowerCase() === "true";
    //     }
    //     isSearchingPivotKeyword = true;
    //   }
    //   if (type === "table_close" && isDigestingSource) {
    //     isDigestingSource = false;
    //   }
    //   if (type === "inline") {
    //     if (isDigestingSource) {
    //       // TODO: digest source here
    //     } else {
    //       if (isSearchingPivotKeyword) {
    //         const match = content.match(RE_PIVOT);
    //         if (match) {
    //           console.log(match);
    //         }
    //       } else {
    //         lastInlineContent = content;
    //       }
    //     }
    //   }
    // }
  });
};

module.exports = usePivotTable;
