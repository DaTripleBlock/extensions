/**
 * Created By Da TripleBlock (TTT)
 * ♥ Please Dont Remove this Comment ♥
 */
(function (Scratch) {
    'use strict';
    class moreAsking {
        getInfo() {
            return {
                id: 'moreaskingdatripleblockk',
                name: 'more asking',
                color1: '#4f89c4',
                color2: '#3f5691',
                color3: '#1900ff',
                blocks: [
                    {
                        opcode: 'askwait',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Ask [Ask] and Wait',
                        arguments: {
                            Ask: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Whats your Name"
                            }
                        }
                    },
                    {
                        opcode: 'questionn',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'Ask [Ask] and Wait',
                        arguments: {
                            Ask: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Whats your Name"
                            }
                        }
                    },
                    {
                        opcode: 'promptt',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Say [Ask] and Wait',
                        arguments: {
                            Ask: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Ok"
                            }
                        }
                    },
                ]
            };
        }
        askwait(args) {
            const question = Scratch.Cast.toString(args.Ask);
            const answer = window.prompt(question);
            if (!answer) {
                return "";
            }
            return Scratch.Cast.toString(answer);
        }
        questionn(args) {
            const question = Scratch.Cast.toString(args.Ask);
            return Scratch.Cast.toBoolean(window.confirm(question));
        }
        promptt(args) {
            const question = Scratch.Cast.toString(args.Ask);
            window.alert(question);
        }
    }
    Scratch.extensions.register(new moreAsking());
})(Scratch);
