

export function StatusConst({status}) {

return (
    <div className="status__themes">
        <div className="status__theme _gray">
            <p className="_gray">{status}</p>
        </div>
    </div>
)}

export function StatusChange() {

    return (
        <div className="status__themes">
            <div className="status__theme _gray">
                <p>Без статуса</p>
            </div>
            <div className="status__theme _gray">
                <p className="_gray">Нужно сделать</p>
            </div>
            <div className="status__theme _gray">
                <p>В работе</p>
            </div>
            <div className="status__theme _gray">
                <p>Тестирование</p>
            </div>
            <div className="status__theme _gray">
                <p>Готово</p>
            </div>
        </div>
    )}