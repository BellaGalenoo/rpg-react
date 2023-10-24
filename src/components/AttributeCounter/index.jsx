export default function AttributeCounter() {
    return (
        <div >
            <button>-</button>
            <select name="numero" id="numero" className="bg-transparent">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button>+</button>
        </div>
    )
}