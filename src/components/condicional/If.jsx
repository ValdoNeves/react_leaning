/*

<if teste = {expressao}>
    <span>...</span>
    <span>...</span>
    <span>...</span>

</if>
*/
export default props => {
    if(props.test){
        return props.children
    }else{
        return false
    }
}