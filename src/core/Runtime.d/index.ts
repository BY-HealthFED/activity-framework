import Member from './Member'
// 运行时变量

interface GlobalState {
    member?: Member;
    A?: string;
    B?: string;
    C?: string;
}

export default interface RuntimeDeclare extends GlobalState{
    setStore: (data: GlobalState) => void;
}
