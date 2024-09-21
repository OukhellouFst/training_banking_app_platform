import React from 'react'
import AnimatedCounter from './AnimatedCounter'

const TotalBalanceBox = (
    {accounts=[],totalBanks,totalCurrentBalance} : TotlaBalanceBoxProps
) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            {/* Doughnut chart */}
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-h2'>Bank Accounts: {totalBanks}</h2>
            <div className='flex flex-col gap-2'>
                <p className='total-blance-label'>Total current balance</p>
                <p className='total-balance-amount flex-center gap-2'>
                    <AnimatedCounter
                        amount={totalCurrentBalance}
                    />
                </p>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox