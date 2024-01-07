export default function Button({text, className, onClick, loading}) {
    if (!loading) {
      return (
        <button className={className} onClick={onClick}>
          {text}
        </button>
      )
    } else {
      return (
        <div class="lds-dual-ring"></div>
      )
    }
}