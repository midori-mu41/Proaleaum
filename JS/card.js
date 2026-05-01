//デッキ
let deck = [{id:"vanilas:mall_sowrd",level:0}];
//カードデータ取得
function getCardData(idData){
    const [pack,id] = String(idData).split(":");
    const data = DATA.find(obj => obj.packId === pack);
    const card = data.cards.find(obj => obj.id === id);
    return {card:card,data:data};
}

//カードHTML作成
function makeCard(idData){
    const card = getCardData(idData.id).card;
    const data = getCardData(idData.id).data;
    //コスト
    let costsHtml = ``;
    for(let i = 0; i < card.costs.length; i++){
        const costs = card.costs[i];
        const color = data.costs.find(obj => obj.name === costs.type).color;
        costsHtml += `<div class="cost" style='background-color : ${color} ;'><span>${costs.value}</span></div>`;
    }
    //アイコン
    let iconHtml = `<table>`;
    for(let x = 0; x < card.icon.length; x++){
        iconHtml += `<tr>`;
        for(let y = 0; y < card.icon[0].length; y++){
            const color = (card.icon[x][y] == 0)? 'white' : 'black';
            iconHtml += `<td style='color:${color};background-color : ${color} ;'></td>`;
        }
        iconHtml += `</tr>`;
    }
    iconHtml += `</table>`;
    //スター
    let starHtml = ``;
    if(idData.level !== 0){
        starHtml = `<div class="cost" style='background-color : #9e9e9e ;'><span style='color:gold;transform: translate(3%, 5%);'>★${idData.level}</span></div>`;
    }
    //名前
    let nameHtml = `<div class="card-name" `;
    if(card.name.length >= 6)nameHtml += `style="white-space:nowrap;transform:scaleX(${6/card.name.length});"`;
    nameHtml += `>${card.name}</div>`;
    //説明
    let descHtml = `<div class="card-desc" `;
    if(card.desc.length >= 12)descHtml += `style="white-space:nowrap;transform:scaleX(${12/card.desc.length});"`;
    descHtml += `>${card.desc}</div>`;

    //行動アイコン
    let descIconHtml = ``;
    for(let i = 0; i < card.actionIcon.length; i++){
        const iconData = card.actionIcon[i];
        const icon = data.descIcon.find(obj => obj.id === iconData.id).icon;
        if(iconData.id == 'enemy') descIconHtml += `<table style = "border: 2px solid rgb(167, 79, 79);">`;
        else if(iconData.id == 'player') descIconHtml += `<table style = "border: 2px solid rgb(74, 91, 165);">`;
        else descIconHtml += `<table style = "border: 2px solid rgb(209, 209, 209);">`;
    for(let x = 0; x < icon.length; x++){
        descIconHtml += `<tr>`;
        for(let y = 0; y < icon[0].length; y++){
            let color;
            if(iconData.id == 'enemy') color = (icon[x][y] == 0)? 'white' : 'rgb(155, 85, 85);';
            else if(iconData.id == 'player') color = (icon[x][y] == 0)? 'white' : 'rgb(102, 113, 155);';
            else color = (icon[x][y] == 0)? 'white' : 'black';
            descIconHtml += `<td style='color:${color};background-color : ${color} ;'></td>`;
        }
        descIconHtml += `</tr>`;
    }
    let text = card.value[iconData.value];
    if(iconData.value == 'none') text = '';
    descIconHtml += `</table><a>${text}</a>`;
}

    //総出力
    let output = `
    <div class="card"'>
        <!-- 上部 -->
        <div class="card-header">
        <div class="costs">
        ${costsHtml}
        </div>
        ${starHtml}
        </div>
        <!-- アイコン -->
        <div class="card-icon">
        ${iconHtml}
        </div>
        <!-- 名前 -->
        ${nameHtml}
        <!-- 説明 -->
        ${descHtml}
        <!-- 説明アイコン -->
        <div class="desc-icon">
        ${descIconHtml}
        </div>
        <!-- タイプ -->
        <div class="card-type">--${card.type}--</div>
    </div>`

    return output;
}

function setCard(data){
    document.getElementById("cardsView").innerHTML += makeCard(data);
}