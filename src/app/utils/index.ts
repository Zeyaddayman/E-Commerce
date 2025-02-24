export const shortText = (text: string) => {

    const limit = 100;

    if (text.length <= limit) return text;

    let result = "";

    for (let i = 0; i < limit; i++) {
        result += text[i];
    }

    return `${result}...`;
}

export const discountedPrice = (price: number, discountPercentage: number) => {

    const discountedPrice = price - (price * discountPercentage / 100);

    return discountedPrice;

}