import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Results({ resultData }) {


    const results = calculateInvestmentResults(resultData);


    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>                
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((item, index) => {

                    const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;

                    return (
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{item.investmentValue}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{item.investedCapital}</td>
                        </tr>
                    );
                })}

            </tbody>
        </table>
    )
}