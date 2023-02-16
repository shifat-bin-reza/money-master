function setValue(getId) {
    const getInputId = document.getElementById(getId);
    const getInputIdString = getInputId.value;

    if (getInputIdString >= '0' && getInputIdString <= '9') {
        getInputId.style.borderColor = "grey";
        const getInputIdNumber = parseFloat(getInputIdString);
        getInputId.value = "";
        return getInputIdNumber;
    } else {
        getInputId.style.borderColor = "red";
        getInputId.value = "";
        return -1;
    }
}

document.getElementById('button-calculate').addEventListener('click', function () {
    const getIncome = setValue('Income');
    const getFood = setValue('Food');
    const getRent = setValue('Rent');
    const getCloth = setValue('Cloth');

    const totalExpenseElement = document.getElementById('get-total-expense');
    const totalBalanceElement = document.getElementById('get-total-savings');

    if (getIncome == -1 || getFood == -1 || getRent == -1 || getCloth == -1) {
        alert('Please Enter Your Amount In Number');
        totalExpenseElement.innerText = 0;
        totalBalanceElement.innerText = 0;
    } else {
        const totalExpense = getFood + getCloth + getRent;
        totalExpenseElement.innerText = totalExpense;


        const totalBalance = getIncome - totalExpense;
        if (totalBalance <= 0) {
            alert("You have 0 balance. Save some money you dog!!");
            totalBalanceElement.innerText = 0;
        } else {
            totalBalanceElement.innerText = totalBalance;
        }
    }
})

document.getElementById('button-saving').addEventListener('click', function () {
    const getSavings = setValue('Savings');

    const totalBalanceElement = document.getElementById('get-total-savings');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    const savingAmount = document.getElementById('saving-amount');
    const remainBalance = document.getElementById('remain-balance');

    if (getSavings == -1 || getSavings > 100) {
        alert('Please Enter Valid Saving Amount In Number');
        savingAmount.innerText = 0;
        remainBalance.innerText = 0;
    } else {
        if (totalBalance == 0) {
            alert("Insufficient Balance!!");
        } else {
            const totalSavings = (totalBalance * getSavings) / 100;
            const totalRemain = totalBalance - totalSavings;

            savingAmount.innerText = totalSavings;
            remainBalance.innerText = totalRemain;
        }
    }
})