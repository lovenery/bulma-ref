function addCodeBlocks() {
    var blocks = document.querySelectorAll(".block");
    // console.log(blocks);
    for (var index = 0; index < blocks.length; index++) {
        var pre_block = document.createElement("PRE");
        var code_block = document.createElement("CODE");
        var block = blocks[index].children;
        // console.log(block);
        for (var j = 0; j < block.length; j++) {
            var ele = block[j];
            // console.log(ele);
            // console.log(ele.outerHTML);
            var code_element = document.createElement("P");
            code_element.textContent = removeExtraIndentation(ele.outerHTML); // outdent.js
            code_block.appendChild(code_element);
        }
        code_block.classList = "xml";
        pre_block.appendChild(code_block);
        blocks[index].appendChild(pre_block);
    }
}