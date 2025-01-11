// Global state
let currentStep = 1;
let selectedPath = null;
const totalSteps = {
    nano: 6,
    usdc: 4,
    bitcoin: 5,
    monero: 4,
    metals: 6,
    banking: 5  // New traditional banking path
};

// Store original dashboard content
let dashboardContent = null;

// Path selection handler
function selectPath(path) {
    selectedPath = path;
    
    // Store dashboard content if first time
    if (!dashboardContent) {
        dashboardContent = document.getElementById('step1').innerHTML;
    }
    
    // Hide the path selection
    document.getElementById('step1').innerHTML = getPathContent(path, 1);
    
    // Update navigation
    updateStepIndicator();
    
    // Show first step of selected path
    showNotification(`Starting ${path.toUpperCase()} learning path!`, 'success');
}

function getPathContent(path, step) {
    switch(path) {
        case 'usdc':
            return getUSDCContent(step);
        case 'bitcoin':
            return getBitcoinContent(step);
        case 'monero':
            return getMoneroContent(step);
        case 'metals':
            return getMetalsContent(step);
        case 'nano':
            return getNanoContent(step);
        case 'banking':
            return getBankingContent(step);
        default:
            return 'Path content not found';
    }
}

// USDC Path Content
function getUSDCContent(step) {
    switch(step) {
        case 1:
            return `
                <h2>Understanding USDC</h2>
                <div class="info-box">
                    <h3>💡 What is USDC?</h3>
                    <p>USDC (USD Coin) is a digital dollar, also known as a stablecoin, that's always worth $1. It combines the stability of USD with the speed and flexibility of cryptocurrency.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Benefits:</h4>
                            <ul>
                                <li>Always worth $1 USD</li>
                                <li>Fully backed by real dollars</li>
                                <li>Regular audits</li>
                                <li>Works across multiple networks</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Use Cases:</h4>
                            <ul>
                                <li>Digital payments</li>
                                <li>International transfers</li>
                                <li>DeFi applications</li>
                                <li>Bill payments</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>⚡ Ethereum</h3>
                            <span class="tag">Most Secure</span>
                        </div>
                        <div class="card-content">
                            <p>The original USDC network with highest security</p>
                            <ul>
                                <li>✓ Maximum security</li>
                                <li>✓ Widest adoption</li>
                                <li>✓ Most integrations</li>
                                <li>⚠️ Higher fees ($5-50)</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://ethereum.org/en/what-is-ethereum/" target="_blank" class="button">Learn More</a>
                                <a href="https://ethereum.org/en/get-eth/" target="_blank" class="link">Get Started →</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>🔵 Base</h3>
                            <span class="tag">Best Value</span>
                        </div>
                        <div class="card-content">
                            <p>Coinbase's L2 solution for efficient transactions</p>
                            <ul>
                                <li>✓ Low fees ($0.01-0.10)</li>
                                <li>✓ Fast transactions</li>
                                <li>✓ Coinbase backed</li>
                                <li>✓ Easy onboarding</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://base.org/" target="_blank" class="button">Try Base</a>
                                <a href="https://docs.base.org/" target="_blank" class="link">Learn More →</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>☀️ Solana</h3>
                            <span class="tag">Fastest</span>
                        </div>
                        <div class="card-content">
                            <p>High-speed, low-cost USDC transactions</p>
                            <ul>
                                <li>✓ Minimal fees ($0.001)</li>
                                <li>✓ Instant transactions</li>
                                <li>✓ Mobile friendly</li>
                                <li>✓ Growing ecosystem</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://solana.com/" target="_blank" class="button">Try Solana</a>
                                <a href="https://docs.solana.com/" target="_blank" class="link">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="feature-section">
                    <h3>🔄 Bill Payment Options</h3>
                    <div class="service-card">
                        <div class="card-header">
                            <h3>💳 Spritz Finance</h3>
                            <span class="tag">Bill Pay</span>
                        </div>
                        <div class="card-content">
                            <p>Pay any bill with your USDC</p>
                            <ul>
                                <li>✓ Pay rent, utilities, credit cards</li>
                                <li>✓ Works with multiple networks</li>
                                <li>✓ Automated payments</li>
                                <li>✓ No bank account needed</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://app.spritz.finance/signup?grsf=z0bl8w" target="_blank" class="button">Try Spritz</a>
                                <a href="https://www.spritz.finance/blog/pay-bills-with-bitcoin" target="_blank" class="link">How it Works →</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        case 2:
            return `
                <h2>USDC Wallets & Security</h2>
                <div class="info-box">
                    <h3>💡 Understanding USDC Wallets</h3>
                    <p>Choose the right wallet based on your network preference and security needs.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Security Essentials:</h4>
                            <ul>
                                <li>Backup seed phrases</li>
                                <li>Use hardware wallets</li>
                                <li>Enable 2FA when possible</li>
                                <li>Verify transactions carefully</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Network Selection:</h4>
                            <ul>
                                <li>Ethereum (Most secure)</li>
                                <li>Base (Low fees)</li>
                                <li>Solana (Fast)</li>
                                <li>Polygon (Versatile)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>🔒 Hardware Wallets</h3>
                            <span class="tag">Most Secure</span>
                        </div>
                        <div class="card-content">
                            <p>Best for large amounts and long-term storage</p>
                            <ul>
                                <li>✓ Ledger (Most Popular)</li>
                                <li>✓ Trezor (Open Source)</li>
                                <li>✓ Multiple network support</li>
                                <li>✓ Offline security</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://www.ledger.com/" target="_blank" class="button">Get Ledger</a>
                                <a href="https://trezor.io/" target="_blank" class="link">Try Trezor →</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>📱 Mobile Wallets</h3>
                            <span class="tag">Convenient</span>
                        </div>
                        <div class="card-content">
                            <p>Easy to use mobile solutions</p>
                            <ul>
                                <li>✓ Metamask (Ethereum/Base)</li>
                                <li>✓ Phantom (Solana)</li>
                                <li>✓ Trust Wallet (Multi-chain)</li>
                                <li>✓ Regular backups needed</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://metamask.io/" target="_blank" class="button">Get Metamask</a>
                                <a href="https://trustwallet.com/" target="_blank" class="link">Try Trust →</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        case 3:
            return `
                <h2>Using USDC</h2>
                <div class="info-box">
                    <h3>💡 USDC Applications</h3>
                    <p>USDC offers various ways to save, spend, and earn with digital dollars.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Common Uses:</h4>
                            <ul>
                                <li>Digital payments</li>
                                <li>International transfers</li>
                                <li>DeFi lending</li>
                                <li>Yield earning</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Best Practices:</h4>
                            <ul>
                                <li>Compare gas fees</li>
                                <li>Verify addresses</li>
                                <li>Start with small amounts</li>
                                <li>Research platforms</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>💸 Bill Payments</h3>
                            <span class="tag">Utility</span>
                        </div>
                        <div class="card-content">
                            <p>Pay bills with your USDC</p>
                            <ul>
                                <li>✓ Rent and utilities</li>
                                <li>✓ Credit card bills</li>
                                <li>✓ Subscription services</li>
                                <li>✓ International payments</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://app.spritz.finance/signup?grsf=z0bl8w" target="_blank" class="button">Try Spritz</a>
                                <a href="https://www.spritz.finance/blog/pay-bills-with-bitcoin" target="_blank" class="link">Learn More →</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>📈 Yield Options</h3>
                            <span class="tag">Earning</span>
                        </div>
                        <div class="card-content">
                            <p>Earn interest on your USDC</p>
                            <ul>
                                <li>✓ Lending platforms</li>
                                <li>✓ Liquidity provision</li>
                                <li>✓ Yield aggregators</li>
                                <li>⚠️ Research risks</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://app.aave.com/" target="_blank" class="button">Try Aave</a>
                                <a href="https://docs.aave.com/faq/" target="_blank" class="link">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        case 4:
            return `
                <h2>USDC & USD Considerations</h2>
                <div class="info-box">
                    <h3>💡 Understanding the Risks</h3>
                    <p>While USDC offers digital dollar convenience, it inherits many traditional USD and banking system drawbacks.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>USDC Specific Risks:</h4>
                            <ul>
                                <li>Centralized control</li>
                                <li>Blacklisting possible</li>
                                <li>Smart contract risks</li>
                                <li>Network fees required</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>USD System Issues:</h4>
                            <ul>
                                <li>Infinite supply inflation</li>
                                <li>Bank dependency</li>
                                <li>Government surveillance</li>
                                <li>Asset freezes</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>🏦 Banking Drawbacks</h3>
                            <span class="tag">Traditional</span>
                        </div>
                        <div class="card-content">
                            <p>Common issues with traditional banking</p>
                            <ul>
                                <li>⚠️ Account maintenance fees</li>
                                <li>⚠️ Transfer/wire fees</li>
                                <li>⚠️ Limited hours operation</li>
                                <li>⚠️ Minimum balance requirements</li>
                            </ul>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>💵 USD Problems</h3>
                            <span class="tag">Systemic</span>
                        </div>
                        <div class="card-content">
                            <p>Fundamental issues with fiat currency</p>
                            <ul>
                                <li>⚠️ Loss of purchasing power</li>
                                <li>⚠️ Debt-based monetary system</li>
                                <li>⚠️ Political manipulation</li>
                                <li>⚠️ Bank bail-in risks</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="completion-note">
                    <h3>🎉 Congratulations!</h3>
                    <p>You've completed the USDC learning path. You now understand:</p>
                    <ul>
                        <li>USDC fundamentals and networks</li>
                        <li>Wallet setup and security</li>
                        <li>Payment and earning options</li>
                        <li>System risks and limitations</li>
                    </ul>
                    <button class="button" onclick="returnToDashboard()">Return to Dashboard</button>
                </div>
            `;
        // Add more USDC steps...
    }
}

// Bitcoin Path Content
function getBitcoinContent(step) {
    switch(step) {
        case 1:
            return `
                <h2>Getting Started with Bitcoin</h2>
                <div class="info-box">
                    <h3>💡 What is Bitcoin?</h3>
                    <p>Bitcoin is digital gold - a decentralized currency that serves as both a store of value and a payment system.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Key Features:</h4>
                            <ul>
                                <li>Limited supply (21 million)</li>
                                <li>Decentralized network</li>
                                <li>Secure & borderless</li>
                                <li>Growing adoption</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Use Cases:</h4>
                            <ul>
                                <li>Long-term savings</li>
                                <li>Lightning payments</li>
                                <li>Remittances</li>
                                <li>Banking alternative</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>⚡ Strike</h3>
                            <span class="tag">Best for Beginners</span>
                        </div>
                        <div class="card-content">
                            <p>Simple Bitcoin buying and Lightning payments</p>
                            <ul>
                                <li>✓ Zero fees</li>
                                <li>✓ Instant deposits</li>
                                <li>✓ Lightning Network ready</li>
                                <li>✓ Bill pay integration</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://strike.me/" target="_blank" class="button">Try Strike</a>
                                <a href="https://strike.me/en/bitcoin/" target="_blank" class="link">Learn More →</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>💻 River</h3>
                            <span class="tag">Best for Savings</span>
                        </div>
                        <div class="card-content">
                            <p>Professional Bitcoin services with FDIC-insured USD</p>
                            <ul>
                                <li>✓ Interest on USD holdings</li>
                                <li>✓ Cold storage security</li>
                                <li>✓ Mining investments</li>
                                <li>✓ Private client services</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://river.com/" target="_blank" class="button">Try River</a>
                                <a href="https://river.com/learn" target="_blank" class="link">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        case 2:
            return `
                <h2>Bitcoin Wallets & Security</h2>
                <div class="info-box">
                    <h3>💡 Understanding Bitcoin Security</h3>
                    <p>Your Bitcoin wallet is your gateway to financial sovereignty. Choosing the right wallet and securing it properly is crucial.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Security Tips:</h4>
                            <ul>
                                <li>Never share private keys</li>
                                <li>Use hardware wallets for large amounts</li>
                                <li>Backup your seed phrase</li>
                                <li>Test with small amounts first</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>🛡 Hardware Wallets</h3>
                            <span class="tag">Most Secure</span>
                        </div>
                        <div class="card-content">
                            <p>Best for storing larger amounts</p>
                            <ul>
                                <li>✓ Ledger Nano (Most Popular)</li>
                                <li>✓ Trezor (Open Source)</li>
                                <li>✓ Coldcard (Bitcoin Only)</li>
                                <li>✓ Tangem (Easy to Use)</li>
                                <li>✓ Physical security</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://www.ledger.com/" target="_blank" class="button">Get Ledger</a>
                                <a href="https://trezor.io/" target="_blank" class="link">Try Trezor →</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>📱 Mobile Wallets</h3>
                            <span class="tag">Daily Use</span>
                        </div>
                        <div class="card-content">
                            <p>Convenient for smaller amounts and daily spending</p>
                            <ul>
                                <li>✓ Aqua Wallet (Liquid Focus)</li>
                                <li>✓ Blue Wallet (Feature Rich)</li>
                                <li>✓ Muun (Simple & Secure)</li>
                                <li>✓ Phoenix (Lightning Focus)</li>
                                <li>✓ Easy backups</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://aqua.net/.io/" target="_blank" class="button">Try Aqua Wallet</a>
                                <a href="https://muun.com/" target="_blank" class="link">Try Muun →</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        case 3:
            return `
                <h2>Bitcoin DCA & Savings</h2>
                <div class="info-box">
                    <h3>💡 What is DCA?</h3>
                    <p>Dollar Cost Averaging (DCA) is an investment strategy where you buy a fixed dollar amount of Bitcoin on a regular schedule, regardless of the price. This helps reduce the impact of price volatility.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Example:</h4>
                            <p>Investing $100 in Bitcoin every week, instead of $400 once a month, helps you get a better average price over time.</p>
                        </div>
                        <div class="example-item">
                            <h4>Benefits:</h4>
                            <ul>
                                <li>Reduces risk of buying at market peaks</li>
                                <li>Creates healthy saving habits</li>
                                <li>Removes emotional decision-making</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="savings-options">
                    <div class="service-grid">
                        <div class="service-card">
                            <div class="card-header">
                                <h3>⚡ Strike</h3>
                                <span class="tag">Best for Paying Bills</span>
                            </div>
                            <div class="card-content">
                                <p>Automated Bitcoin purchases with zero fees</p>
                                <ul>
                                    <li>✓ Zero fees on recurring buys</li>
                                    <li>✓ Instant bank deposits</li>
                                    <li>✓ Lightning Network ready</li>
                                    <li>✓ Bill pay integration</li>
                                </ul>
                                <div class="card-actions">
                                    <a href="https://strike.me/" target="_blank" class="button">Try Strike</a>
                                    <a href="https://strike.me/business/" target="_blank" class="link">Strike for Business →</a>
                                </div>
                            </div>
                        </div>

                        <div class="service-card">
                            <div class="card-header">
                                <h3>🏦 River Financial</h3>
                                <span class="tag">Best for DCA</span>
                            </div>
                            <div class="card-content">
                                <p>Professional Bitcoin services with FDIC-insured USD</p>
                                <ul>
                                    <li>✓ Interest on USD holdings</li>
                                    <li>✓ Cold storage security</li>
                                    <li>✓ Mining investments</li>
                                    <li>✓ Private client services</li>
                                </ul>
                                <div class="card-actions">
                                    <a href="https://river.com/" target="_blank" class="button">Try River</a>
                                    <a href="https://river.com/learn" target="_blank" class="link">Learn More →</a>
                                </div>
                            </div>
                        </div>

                        <div class="service-card">
                            <div class="card-header">
                                <h3>🔐 Swan Bitcoin</h3>
                                <span class="tag">Best for Saving</span>
                            </div>
                            <div class="card-content">
                                <p>Bitcoin-only platform with extensive learning resources</p>
                                <ul>
                                    <li>✓ Automatic withdrawals</li>
                                    <li>✓ Low fees</li>
                                    <li>✓ Premium education</li>
                                    <li>✓ Private key workshops</li>
                                </ul>
                                <div class="card-actions">
                                    <a href="https://www.swanbitcoin.com/" target="_blank" class="button">Try Swan</a>
                                    <a href="https://www.swanbitcoin.com/business/" target="_blank" class="link">Swan for Business →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        case 4:
            return `
                <h2>Bitcoin Considerations & Risks</h2>
                <div class="info-box">
                    <h3>💡 Understanding the Trade-offs</h3>
                    <p>While Bitcoin offers many advantages, it's important to understand its limitations and risks.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Price Volatility:</h4>
                            <ul>
                                <li>Can swing 10%+ in a single day</li>
                                <li>May affect short-term usability</li>
                                <li>Requires strong conviction</li>
                                <li>Best viewed long-term</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Technical Challenges:</h4>
                            <ul>
                                <li>Network congestion possible</li>
                                <li>Higher fees during peaks</li>
                                <li>Learning curve for security</li>
                                <li>Irreversible transactions</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>🔒 Security Best Practices</h3>
                            <span class="tag">Essential</span>
                        </div>
                        <div class="card-content">
                            <p>Critical security measures for Bitcoin holders</p>
                            <ul>
                                <li>✓ Use hardware wallets</li>
                                <li>✓ Multiple backups of seed phrase</li>
                                <li>✓ Never share private keys</li>
                                <li>✓ Beware of phishing attempts</li>
                            </ul>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>📚 Tax Implications</h3>
                            <span class="tag">Important</span>
                        </div>
                        <div class="card-content">
                            <p>Key tax considerations for Bitcoin users</p>
                            <ul>
                                <li>✓ Capital gains apply</li>
                                <li>✓ Track all transactions</li>
                                <li>✓ Consider tax software</li>
                                <li>✓ Consult tax professional</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        case 5:
            return `
                <h2>Advanced Bitcoin Features</h2>
                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>⚡ Lightning Network</h3>
                            <span class="tag">Fast Payments</span>
                        </div>
                        <div class="card-content">
                            <p>Second layer solution for instant payments</p>
                            <ul>
                                <li>✓ Instant settlements</li>
                                <li>✓ Micro-transactions</li>
                                <li>✓ Nearly free fees</li>
                                <li>✓ Growing adoption</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://lightning.network/" target="_blank" class="button">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>💧 Liquid Network</h3>
                            <span class="tag">Sidechain</span>
                        </div>
                        <div class="card-content">
                            <p>Bitcoin sidechain for traders and exchanges</p>
                            <ul>
                                <li>✓ Fast settlements</li>
                                <li>✓ Asset issuance</li>
                                <li>✓ Confidential transactions</li>
                                <li>✓ Exchange integration</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://liquid.net/" target="_blank" class="button">Explore Liquid</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="completion-note">
                    <h3>🎉 Congratulations!</h3>
                    <p>You've completed the Bitcoin learning path. You now understand:</p>
                    <ul>
                        <li>Bitcoin basics and security</li>
                        <li>Wallet options and best practices</li>
                        <li>DCA and savings strategies</li>
                        <li>Advanced scaling solutions</li>
                        <li>Network considerations</li>
                    </ul>
                    <button class="button" onclick="returnToDashboard()">Return to Dashboard</button>
                </div>
            `;
        default:
            return 'Content not found';
    }
}

// Monero Path Content
function getMoneroContent(step) {
    switch(step) {
        case 1:
            return `
                <h2>Private Money with Monero</h2>
                <div class="info-box">
                    <h3>💡 What is Monero?</h3>
                    <p>Monero is private digital cash that keeps your financial activity confidential. Unlike most cryptocurrencies, all Monero transactions are private by default.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Key Features:</h4>
                            <ul>
                                <li>Complete transaction privacy</li>
                                <li>Fungible money</li>
                                <li>ASIC-resistant mining</li>
                                <li>Dynamic block size</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Privacy Technologies:</h4>
                            <ul>
                                <li>Ring signatures (hide sender)</li>
                                <li>Stealth addresses (hide receiver)</li>
                                <li>RingCT (hide amounts)</li>
                                <li>Network privacy (IP protection)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        case 2:
            return `
                <h2>Monero Wallets & Security</h2>
                <div class="info-box">
                    <h3>💡 Understanding Monero Security</h3>
                    <p>Monero offers unmatched privacy, but proper wallet setup and security practices are essential.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Security Essentials:</h4>
                            <ul>
                                <li>Use official or audited wallets</li>
                                <li>Backup seed phrases securely</li>
                                <li>Verify download signatures</li>
                                <li>Use trusted nodes</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Privacy Best Practices:</h4>
                            <ul>
                                <li>Never reuse addresses</li>
                                <li>Wait for confirmations</li>
                                <li>Use Tor/VPN connection</li>
                                <li>Keep software updated</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>🖥️ Official GUI Wallet</h3>
                            <span class="tag">Desktop</span>
                        </div>
                        <div class="card-content">
                            <p>Full-featured desktop wallet with maximum security</p>
                            <ul>
                                <li>✓ Run your own node</li>
                                <li>✓ Advanced privacy features</li>
                                <li>✓ Multiple wallet support</li>
                                <li>✓ Hardware wallet integration</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://www.getmonero.org/downloads/" target="_blank" class="button">Download</a>
                                <a href="https://www.getmonero.org/resources/user-guides/" target="_blank" class="link">View Guide →</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>📱 Cake Wallet</h3>
                            <span class="tag">Mobile</span>
                        </div>
                        <div class="card-content">
                            <p>Popular mobile wallet with built-in exchange</p>
                            <ul>
                                <li>✓ Easy to use interface</li>
                                <li>✓ Built-in exchange</li>
                                <li>✓ Multiple assets</li>
                                <li>✓ Node selection</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://cakewallet.com/" target="_blank" class="button">Get Cake</a>
                                <a href="https://guides.cakewallet.com/" target="_blank" class="link">Learn More →</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>🔒 Feather Wallet</h3>
                            <span class="tag">Advanced</span>
                        </div>
                        <div class="card-content">
                            <p>Feature-rich desktop wallet for power users</p>
                            <ul>
                                <li>✓ Advanced privacy tools</li>
                                <li>✓ Built-in Tor support</li>
                                <li>✓ Coin control features</li>
                                <li>✓ Transaction history export</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://featherwallet.org/" target="_blank" class="button">Get Feather</a>
                                <a href="https://docs.featherwallet.org/" target="_blank" class="link">Documentation →</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        case 3:
            return `
                <h2>Acquiring Monero Privately</h2>
                <div class="info-box">
                    <h3>💡 Privacy-Focused Trading</h3>
                    <p>There are several ways to acquire Monero while maintaining your privacy. Choose the method that best suits your needs.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Privacy Considerations:</h4>
                            <ul>
                                <li>No KYC requirements</li>
                                <li>IP address protection</li>
                                <li>Payment method privacy</li>
                                <li>Transaction unlinkability</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Best Practices:</h4>
                            <ul>
                                <li>Use P2P exchanges</li>
                                <li>Avoid centralized KYC</li>
                                <li>Consider atomic swaps</li>
                                <li>Use cash when possible</li>
                            </ul>
                        </div>
                    </div>
                </div>

            

                <div class="service-grid">
                     <div class="service-card">
                        <div class="card-header">
                            <h3>🔄 RetoSwap</h3>
                            <span class="tag">P2P Exchange</span>
                        </div>
                        <div class="card-content">
                            <p>Private peer-to-peer trading platform</p>
                            <ul>
                                <li>✓ No KYC required</li>
                                <li>✓ Direct peer trading</li>
                                <li>✓ Multiple payment methods</li>
                                <li>✓ Escrow protection</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://retoswap.com/" target="_blank" class="button">Try RetoSwap</a>
                                <a href="https://retoswap.com/#download" target="_blank" class="link">Download Here →</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>⚡ Atomic Swaps</h3>
                            <span class="tag">Advanced</span>
                        </div>
                        <div class="card-content">
                            <p>Trustless BTC ↔ XMR trading</p>
                            <ul>
                                <li>✓ No intermediaries</li>
                                <li>✓ Maximum privacy</li>
                                <li>✓ Cross-chain swaps</li>
                                <li>✓ Decentralized</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://unstoppableswap.net/" target="_blank" class="button">Try Swaps</a>
                                <a href="https://github.com/UnstoppableSwap/core" target="_blank" class="link">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        case 4:
            return `
                <h2>Monero Considerations & Risks</h2>
                <div class="info-box">
                    <h3>💡 Understanding the Trade-offs</h3>
                    <p>While Monero offers unmatched privacy, it's important to understand its limitations and challenges.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Technical Challenges:</h4>
                            <ul>
                                <li>Larger transaction sizes</li>
                                <li>More complex calculations</li>
                                <li>Slower syncing process</li>
                                <li>Higher storage requirements</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Practical Considerations:</h4>
                            <ul>
                                <li>Limited exchange support</li>
                                <li>Regulatory uncertainty</li>
                                <li>Fewer merchant options</li>
                                <li>Price volatility</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>🔒 Privacy Best Practices</h3>
                            <span class="tag">Essential</span>
                        </div>
                        <div class="card-content">
                            <p>Maximize your privacy when using Monero</p>
                            <ul>
                                <li>✓ Use your own node</li>
                                <li>✓ Avoid exchange wallets</li>
                                <li>✓ Consider IP protection (VPN/Tor)</li>
                                <li>✓ Practice good OPSEC</li>
                            </ul>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>⚠️ Common Mistakes</h3>
                            <span class="tag">Warning</span>
                        </div>
                        <div class="card-content">
                            <p>Avoid these privacy-compromising mistakes</p>
                            <ul>
                                <li>✓ Don't share transaction IDs</li>
                                <li>✓ Avoid reusing addresses</li>
                                <li>✓ Don't share wallet timestamps</li>
                                <li>✓ Be cautious with metadata</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="completion-note">
                    <h3>🎉 Congratulations!</h3>
                    <p>You've completed the Monero learning path. You now understand:</p>
                    <ul>
                        <li>Privacy fundamentals</li>
                        <li>Secure wallet management</li>
                        <li>Private acquisition methods</li>
                        <li>Network considerations</li>
                    </ul>
                    <button class="button" onclick="returnToDashboard()">Return to Dashboard</button>
                </div>
            `;
        // Add more Monero steps...
    }
}

// Add Metals Path Content
function getMetalsContent(step) {
    switch(step) {
        case 1:
            return `
                <h2>Understanding Precious Metals</h2>
                <div class="info-box">
                    <h3>💡 Why Precious Metals?</h3>
                    <p>Precious metals have been used as money for thousands of years. They offer a time-tested way to preserve wealth outside of the banking system.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Key Benefits:</h4>
                            <ul>
                                <li>Physical ownership</li>
                                <li>No counterparty risk</li>
                                <li>Inflation protection</li>
                                <li>Global acceptance</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Popular Forms:</h4>
                            <ul>
                                <li>Sovereign coins</li>
                                <li>Investment bars</li>
                                <li>Junk silver</li>
                                <li>Digital certificates</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>💳 Kinesis Money</h3>
                            <span class="tag">Digital + Physical</span>
                        </div>
                        <div class="card-content">
                            <p>Digital gold/silver backed by physical metals</p>
                            <ul>
                                <li>✓ 1:1 physical backing</li>
                                <li>✓ Yield on holdings</li>
                                <li>✓ Debit card available</li>
                                <li>✓ Physical redemption</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://kinesis.money" target="_blank" class="button">Try Kinesis</a>
                                <a href="https://kinesis.money/about-us/" target="_blank" class="link">Learn More →</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>💻 OneGold</h3>
                            <span class="tag">Professional Storage</span>
                        </div>
                        <div class="card-content">
                            <p>APMEX & Sprott backed digital metals platform</p>
                            <ul>
                                <li>✓ Low premiums</li>
                                <li>✓ Easy redemption</li>
                                <li>✓ IRA eligible</li>
                                <li>✓ Vaulted storage</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://www.onegold.com" target="_blank" class="button">Try OneGold</a>
                                <a href="https://www.onegold.com/learn-more" target="_blank" class="link">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="history-note">
                    <h3>📚 Historical Context</h3>
                    <div class="timeline">
                        <div class="timeline-item">
                            <span class="date">Pre-1900s</span>
                            <p>Bimetallic Standard Era</p>
                        </div>
                        <div class="timeline-item">
                            <span class="date">1900-1933</span>
                            <p>Gold Standard Era</p>
                        </div>
                        <div class="timeline-item">
                            <span class="date">1944-1971</span>
                            <p>Bretton Woods System</p>
                        </div>
                        <div class="timeline-item">
                            <span class="date">1971-Present</span>
                            <p>Fiat Currency Era</p>
                        </div>
                    </div>
                </div>
            `;
        case 2:
            return `
                <h2>Modern Precious Metals Options</h2>
                <div class="metals-options">
                    <div class="option-card">
                        <h3>🏦 Physical Storage</h3>
                        <div class="providers">
                            <div class="provider">
                                <h4>Kinesis Money</h4>
                                <p>Digital gold/silver backed by physical metals</p>
                                <ul>
                                    <li>1:1 backing</li>
                                    <li>Yield on holdings</li>
                                    <li>Debit card available</li>
                                </ul>
                                <a href="https://kinesis.money" target="_blank" class="button">Learn More</a>
                            </div>
                            <div class="provider">
                                <h4>OneGold</h4>
                                <p>APMEX & Sprott backed digital metals</p>
                                <ul>
                                    <li>Low premiums</li>
                                    <li>Easy redemption</li>
                                    <li>IRA eligible</li>
                                </ul>
                                <a href="https://www.onegold.com" target="_blank" class="button">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="option-card">
                        <h3>🏪 Local Dealers</h3>
                        <p>Find reputable dealers near you:</p>
                        <ul>
                            <li><a href="https://www.pmsforsale.com" target="_blank">r/Pmsforsale</a> - Reddit's P2P precious metals market</li>
                            <li><a href="https://findbullionprices.com" target="_blank">FindBullionPrices</a> - Compare local dealer prices</li>
                            <li><a href="https://www.coincommunity.com/forum/forum.asp?FORUM_ID=7" target="_blank">Coin Community</a> - Dealer reviews and discussions</li>
                        </ul>
                    </div>
                </div>
            `;
        case 3:
            return `
                <h2>Storage & Security</h2>
                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>🏠 Home Storage</h3>
                            <span class="tag">DIY Option</span>
                        </div>
                        <div class="card-content">
                            <p>Secure your metals at home</p>
                            <ul>
                                <li>✓ Complete control</li>
                                <li>✓ No storage fees</li>
                                <li>✓ Immediate access</li>
                                <li>⚠️ Security responsibility</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://www.libertysafe.com/" target="_blank" class="button">Get Safe</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>🏛️ Private Vaults</h3>
                            <span class="tag">Professional</span>
                        </div>
                        <div class="card-content">
                            <p>Professional security solutions</p>
                            <ul>
                                <li>✓ Maximum security</li>
                                <li>✓ Insurance available</li>
                                <li>✓ Private access</li>
                                <li>⚠️ Monthly fees</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        case 4:
            return `
                <h2>Risks & Considerations</h2>
                <div class="info-box">
                    <h3>💡 Understanding Metal Investments</h3>
                    <p>While precious metals offer stability, they come with their own set of challenges.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Physical Risks:</h4>
                            <ul>
                                <li>Theft potential</li>
                                <li>Storage security</li>
                                <li>Insurance costs</li>
                                <li>Transportation risks</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Market Considerations:</h4>
                            <ul>
                                <li>Dealer premiums</li>
                                <li>Price manipulation</li>
                                <li>Limited liquidity</li>
                                <li>No yield/dividends</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>🔍 Authentication</h3>
                            <span class="tag">Essential</span>
                        </div>
                        <div class="card-content">
                            <p>Verify your precious metals</p>
                            <ul>
                                <li>✓ Use trusted dealers</li>
                                <li>✓ Learn testing methods</li>
                                <li>✓ Verify hallmarks</li>
                                <li>✓ Consider certification</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        case 5:
            return `
                <h2>Historical Significance</h2>
                <div class="info-box">
                    <h3>💡 The Role of Precious Metals in History</h3>
                    <p>Precious metals have been humanity's most enduring form of money for over 5000 years.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Key Historical Uses:</h4>
                            <ul>
                                <li>International trade</li>
                                <li>Wealth preservation</li>
                                <li>Currency backing</li>
                                <li>Industrial applications</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Historical Events:</h4>
                            <ul>
                                <li>1933 Gold confiscation</li>
                                <li>1971 Nixon Shock</li>
                                <li>2008 Financial Crisis</li>
                                <li>2020 Currency debasement</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>🥇 Gold's Role</h3>
                            <span class="tag">Monetary</span>
                        </div>
                        <div class="card-content">
                            <p>Gold's historical monetary importance</p>
                            <ul>
                                <li>✓ Central bank reserves</li>
                                <li>✓ Crisis protection</li>
                                <li>✓ Inflation hedge</li>
                                <li>✓ International settlement</li>
                            </ul>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>🥈 Silver's Role</h3>
                            <span class="tag">Dual Purpose</span>
                        </div>
                        <div class="card-content">
                            <p>Silver's monetary and industrial uses</p>
                            <ul>
                                <li>✓ Historical money</li>
                                <li>✓ Industrial demand</li>
                                <li>✓ Medical applications</li>
                                <li>✓ Technology component</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        case 6:
            return `
                <h2>Modern Applications & Future</h2>
                <div class="info-box">
                    <h3>💡 Contemporary Uses of Precious Metals</h3>
                    <p>Precious metals continue to play vital roles in both finance and industry.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Modern Uses:</h4>
                            <ul>
                                <li>Investment vehicles</li>
                                <li>Technology manufacturing</li>
                                <li>Medical devices</li>
                                <li>Jewelry production</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Future Potential:</h4>
                            <ul>
                                <li>Digital gold backing</li>
                                <li>Green technology</li>
                                <li>Space exploration</li>
                                <li>New industrial uses</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>🚀 Future Applications</h3>
                            <span class="tag">Innovation</span>
                        </div>
                        <div class="card-content">
                            <p>Emerging uses for precious metals</p>
                            <ul>
                                <li>✓ Solar panels</li>
                                <li>✓ Electric vehicles</li>
                                <li>✓ Quantum computing</li>
                                <li>✓ Nanotechnology</li>
                            </ul>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>💎 Investment Evolution</h3>
                            <span class="tag">Modern</span>
                        </div>
                        <div class="card-content">
                            <p>New ways to invest in metals</p>
                            <ul>
                                <li>✓ Tokenized metals</li>
                                <li>✓ Metal-backed stablecoins</li>
                                <li>✓ Precious metal NFTs</li>
                                <li>✓ Smart contract allocation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="completion-note">
                    <h3>🎉 Congratulations!</h3>
                    <p>You've completed the Precious Metals learning path. You now understand:</p>
                    <ul>
                        <li>Historical significance of precious metals</li>
                        <li>Modern storage and security options</li>
                        <li>Investment considerations and risks</li>
                        <li>Future applications and potential</li>
                    </ul>
                    <button class="button" onclick="returnToDashboard()">Return to Dashboard</button>
                </div>
            `;
        default:
            return 'Content not found';
    }
}

// Add Nano Path Content
function getNanoContent(step) {
    switch(step) {
        case 1:
            return `
                <h2>Understanding Nano</h2>
                <div class="info-box">
                    <h3>💡 What is Nano?</h3>
                    <p>Nano is digital cash reimagined - instant, feeless, and eco-friendly. It's designed for everyday transactions without the traditional barriers.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Key Features:</h4>
                            <ul>
                                <li>Instant settlements</li>
                                <li>Zero transaction fees</li>
                                <li>Energy efficient</li>
                                <li>Fixed supply (133M)</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Use Cases:</h4>
                            <ul>
                                <li>Daily transactions</li>
                                <li>Micro-payments</li>
                                <li>Cross-border transfers</li>
                                <li>Online payments</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>📱 Natrium</h3>
                            <span class="tag">Best Mobile</span>
                        </div>
                        <div class="card-content">
                            <p>User-friendly mobile wallet for everyday use</p>
                            <ul>
                                <li>✓ Simple interface</li>
                                <li>✓ Biometric security</li>
                                <li>✓ Quick payments</li>
                                <li>✓ Contact backup</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://natrium.io/" target="_blank" class="button">Get Natrium</a>
                                <a href="https://docs.natrium.io/" target="_blank" class="link">Learn More →</a>
                            </div>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>💻 Nault</h3>
                            <span class="tag">Best Desktop</span>
                        </div>
                        <div class="card-content">
                            <p>Feature-rich desktop wallet with advanced options</p>
                            <ul>
                                <li>✓ Hardware wallet support</li>
                                <li>✓ Multiple accounts</li>
                                <li>✓ Representative management</li>
                                <li>✓ Offline signing</li>
                            </ul>
                            <div class="card-actions">
                                <a href="https://nault.cc/" target="_blank" class="button">Try Nault</a>
                                <a href="https://docs.nault.cc/" target="_blank" class="link">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        case 2:
            return `
                <h2>Get Your First Nano</h2>
                <p>Here are several ways to get some free Nano to experiment with:</p>
                <div class="faucet-list">
                    <div class="faucet-card">
                        <h3>🚰 NanoDrop</h3>
                        <p>A simple faucet that drops small amounts of Nano</p>
                        <a href="https://nanodrop.io" target="_blank" class="button">Visit NanoDrop</a>
                    </div>
                    <div class="faucet-card">
                        <h3>🎮 PlayNano</h3>
                        <p>Complete surveys, offers, and play games to earn Nano</p>
                        <a href="https://playnano.online/faucets" target="_blank" class="button">Visit PlayNano</a>
                    </div>
                    <div class="faucet-card">
                        <h3>📱 WeNano</h3>
                        <p>Collect Nano from spots around the world</p>
                        <a href="https://wenano.net" target="_blank" class="button">Try WeNano</a>
                    </div>
                    <div class="faucet-card">
                        <h3>🎯 Nano-GPT</h3>
                        <p>View multiple options to earn Nano and use Nano-GPT</p>
                        <a href="https://nano-gpt.com/earn" target="_blank" class="button">Use nano-gpt</a>
                    </div>
                    <div class="faucet-card">
                        <h3>🎬 CryptoVision</h3>
                        <p>Watch videos and get paid in Nano</p>
                        <a href="https://cryptovision.live/" target="_blank" class="button">Watch & Earn</a>
                    </div>
                    <div class="faucet-card">
                        <h3>🔄 Nanswap</h3>
                        <p>Use CPU mining to earn Nano</p>
                        <a href="https://nanswap.com/nano-faucet" target="_blank" class="button">Try Nanswap</a>
                    </div>
                </div>
                <div class="earning-info">
                    <h3>💡 Getting Started with Nano</h3>
                    <p>Try these methods to get your first Nano:</p>
                    <ul>
                        <li>
                            <span class="method">🎮 Games & Videos</span>
                            <span class="time">5-15 minutes</span>
                            <span class="reward">0.01-0.1 Nano</span>
                        </li>
                        <li>
                            <span class="method">📱 WeNano Spots</span>
                            <span class="time">Instant</span>
                            <span class="reward">0.01-1 Nano</span>
                        </li>
                        <li>
                            <span class="method">🎯 Faucets</span>
                            <span class="time">Instant</span>
                            <span class="reward">0.001-0.01 Nano</span>
                        </li>
                        <li>
                            <span class="method">✍️ Surveys</span>
                            <span class="time">10-30 minutes</span>
                            <span class="reward">0.1-5 Nano</span>
                        </li>
                    </ul>
                </div>
                <div class="next-step">
                    <p>💡 You don't need to try every faucet - even a tiny amount of Nano is enough to continue!</p>
                    <button class="button" onclick="nextStep()">I've Got Some Nano!</button>
                </div>
            `;
        case 3:
            return `
                <h2>Try Some Nano Transactions</h2>
                <div class="example-cards">
                    <div class="example-card">
                        <h3>💸 Simple Payment</h3>
                        <p>Send a tiny amount with Nano.to</p>
                        <button class="button" onclick="demonstrateSimplePayment()">Try It</button>
                    </div>

                    <div class="example-card">
                        <h3>🔌 Payment Link</h3>
                        <p>Try the BitRequest invoice url</p>
                        <button class="button" onclick="demonstrateShopPayment()">Visit Shop</button>
                    </div>

                    <div class="example-card">
                        <h3>🛍️ Shop Demo</h3>
                        <p>Try the brewery demo shop</p>
                        <button class="button" onclick="nextStep()">Visit Shop</button>
                    </div>

                    <div class="example-card">
                        <h3>💱 Swap Demo</h3>
                        <p>Try swapping Nano with Nanswap</p>
                        <a href="https://nanswap.com/" target="_blank" class="button">Nanswap</a>
                    </div>

                    <div class="example-card">
                        <h3>📃 Invoice Demo</h3>
                        <p>Generate a payment invoice</p>
                        <button class="button" onclick="demonstrateInvoice()">Create Invoice</button>
                    </div>

                    <div class="example-card">
                        <h3>💝 Donation</h3>
                        <p>Support Nano development</p>
                        <a href="https://nano.to/development" target="_blank" class="button">Donate</a>
                    </div>
                </div>
                <div class="demo-note">
                    <p><strong>Note:</strong> These demos showcase different Nano payment solutions:
                        <ul>
                            <li>Simple payment uses <a href="https://docs.nano.to/checkout" target="_blank">nano.to checkout</a></li>
                            <li>Payment link uses <a href="https://www.bitrequest.io/request-url/" target="_blank">BitRequest's interface</a></li>
                            <li>Swap demo uses <a href="https://nanswap.com/" target="_blank">Nanswap's exchange</a></li>
                            <li>Invoice demo uses <a href="https://docs.nano.to/checkout" target="_blank">nano.to's invoice system</a></li>
                        </ul>
                    </p>
                </div>
                <div class="completion-note">
                    <p>Try at least one of the payment demos above to see how fast and easy Nano transactions are!</p>
                    <p>When you're ready, click 'Next' to continue exploring.</p>
                    <button class="button" onclick="nextStep()">Continue to Store Demo →</button>
                </div>
            `;
        case 4:
            return `
                <h2>Nano Store Example</h2>
                <div class="store-container">
                    <div class="products-grid">
                        <div class="product-card">
                            <img src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400" alt="Cryptocraft Original">
                            <h3>CryptoCraft Original</h3>
                            <p>Truly the height of our brewing craft.</p>
                            <div class="price">$2.00</div>
                            <button class="button" onclick="addToCart('original')">Add to Cart</button>
                        </div>
                        <div class="product-card">
                            <img src="https://images.unsplash.com/photo-1584225064785-c62a8b43d148?w=400" alt="CryptoCraft Lite">
                            <h3>CryptoCraft Lite</h3>
                            <p>A lighter chip off the original block.</p>
                            <div class="price">$1.00</div>
                            <button class="button" onclick="addToCart('lite')">Add to Cart</button>
                        </div>
                        <div class="product-card">
                            <img src="https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=400" alt="CryptoCraft Skynet">
                            <h3>CryptoCraft Skynet</h3>
                            <p>If you really, really like beer.</p>
                            <div class="price">$4.00</div>
                            <button class="button" onclick="addToCart('skynet')">Add to Cart</button>
                        </div>
                    </div>
                    <div class="cart-sidebar">
                        <h3>Shopping Cart</h3>
                        <div id="cart-items"></div>
                        <div class="cart-total">Total: $<span id="cart-total">0.00</span></div>
                        <button class="button checkout-btn" onclick="checkoutWithNano()">Checkout with Nano</button>
                    </div>
                </div>
                <div class="demo-note">
                    <p><strong>Note:</strong> This is a demo store using Nano.to checkout. Try adding items and completing a purchase!</p>
                </div>
            `;
        case 5:
            return `
                <h2>Nano Considerations & Risks</h2>
                <div class="info-box">
                    <h3>💡 Understanding the Trade-offs</h3>
                    <p>While Nano offers incredible benefits, it's important to understand its challenges and limitations.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Technical Challenges:</h4>
                            <ul>
                                <li>Spam protection complexity</li>
                                <li>Limited smart contracts</li>
                                <li>Node hardware requirements</li>
                                <li>Bootstrap time for nodes</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Adoption Challenges:</h4>
                            <ul>
                                <li>Lower market liquidity</li>
                                <li>Fewer trading pairs</li>
                                <li>Price volatility</li>
                                <li>Exchange availability</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>🛡️ Security Considerations</h3>
                            <span class="tag">Important</span>
                        </div>
                        <div class="card-content">
                            <p>Key security aspects to consider</p>
                            <ul>
                                <li>✓ Representative selection matters</li>
                                <li>✓ Keep seeds absolutely secure</li>
                                <li>✓ Backup wallet recovery phrases</li>
                                <li>✓ Use hardware wallets for large amounts</li>
                            </ul>
                        </div>
                    </div>

                    <div class="service-card">
                        <div class="card-header">
                            <h3>💡 Best Practices</h3>
                            <span class="tag">Tips</span>
                        </div>
                        <div class="card-content">
                            <p>Maximize your Nano experience</p>
                            <ul>
                                <li>✓ Start with small amounts</li>
                                <li>✓ Use reputable exchanges</li>
                                <li>✓ Keep software updated</li>
                                <li>✓ Verify addresses carefully</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        case 6:
            return `
                <h2>Advanced Nano Features</h2>
                <div class="advanced-features">
                    <div class="feature-section">
                        <h3>🔧 Block Explorers</h3>
                        <p>View transactions and account history:</p>
                        <div class="explorer-options">
                            <a href="https://blocklattice.io/" target="_blank" class="button">BlockLattice.io</a>
                            <a href="https://nanexplorer.com/nano" target="_blank" class="button">NanoExplorer</a>
                        </div>
                    </div>

                    <div class="feature-section">
                        <h3>🎮 Network Visualizers</h3>
                        <p>Watch Nano transactions in real-time:</p>
                        <div class="tools-grid">
                            <div class="tool-card">
                                <h4>Nano Visual</h4>
                                <p>Beautiful block lattice visualization</p>
                                <a href="https://nanovisual.numsu.dev/" target="_blank" class="button">View Network</a>
                            </div>
                            <div class="tool-card">
                                <h4>TX Highway</h4>
                                <p>Compare Nano vs Bitcoin transactions</p>
                                <a href="https://bitdesert.github.io/txhighway-nano/" target="_blank" class="button">Watch Traffic</a>
                            </div>
                            <div class="tool-card">
                                <h4>Nano Snow</h4>
                                <p>Transactions as falling snowflakes</p>
                                <a href="https://snow.somenano.com/" target="_blank" class="button">Let It Snow</a>
                            </div>
                        </div>
                    </div>

                    <div class="feature-section">
                        <h3>🔧 Developer Tools</h3>
                        <div class="tools-grid">
                            <div class="tool-card">
                                <h4>Nano.to API</h4>
                                <p>Easy payment integration</p>
                                <a href="https://docs.nano.to" target="_blank" class="button">View Docs</a>
                            </div>
                            <div class="tool-card">
                                <h4>Node API</h4>
                                <p>Run your own node</p>
                                <a href="https://docs.nano.org/commands/rpc-protocol/" target="_blank" class="button">RPC Docs</a>
                            </div>
                        </div>
                    </div>

                    <div class="completion-note">
                        <h3>🎉 Congratulations!</h3>
                        <p>You've completed the Nano learning path. You now understand how to:</p>
                        <ul>
                            <li>Create and secure a Nano wallet</li>
                            <li>Make instant, feeless transactions</li>
                            <li>Use Nano for commerce</li>
                            <li>Monitor network activity</li>
                            <li>Access advanced tools</li>
                        </ul>
                        <button class="button" onclick="returnToDashboard()">Return to Dashboard</button>
                    </div>
                </div>
            `;
        default:
            return 'Content not found';
    }
}

// Add the banking path content:
function getBankingContent(step) {
    switch(step) {
        case 1:
            return `
                <h2>The Federal Reserve System</h2>
                <div class="info-box">
                    <h3>💡 Understanding Modern Money Creation</h3>
                    <p>The Federal Reserve, created in 1913, is neither federal nor a reserve. It's a private banking cartel with unprecedented power.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Key Facts:</h4>
                            <ul>
                                <li>Private corporation, not government</li>
                                <li>Creates money from nothing</li>
                                <li>Charges interest on all money</li>
                                <li>Never fully audited</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>System Effects:</h4>
                            <ul>
                                <li>Perpetual debt cycle</li>
                                <li>Hidden inflation tax</li>
                                <li>Wealth concentration</li>
                                <li>Economic instability</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>📊 Money Supply Growth</h3>
                            <span class="tag">Alarming</span>
                        </div>
                        <div class="card-content">
                            <img src="https://fred.stlouisfed.org/graph/fredgraph.png?id=M2SL" alt="M2 Money Supply" style="width: 100%; border-radius: 8px;">
                            <p>U.S. Money Supply (M2) showing exponential growth</p>
                        </div>
                    </div>
                </div>
            `;
        case 2:
            return `
                <h2>Fractional Reserve Banking</h2>
                <div class="info-box">
                    <h3>💡 How Banks Create Money</h3>
                    <p>Banks create new money whenever they make loans, effectively creating money out of thin air.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>The Process:</h4>
                            <ul>
                                <li>Bank receives $100 deposit</li>
                                <li>Keeps $10 (10% reserve)</li>
                                <li>Lends out $90</li>
                                <li>Process repeats ~10 times</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>The Result:</h4>
                            <ul>
                                <li>$100 becomes ~$1000</li>
                                <li>Money from nothing</li>
                                <li>Interest charged on all</li>
                                <li>Systematic inflation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="info-box warning-box">
                    <h3>🏦 The FDIC Illusion</h3>
                    <p>The Federal Deposit Insurance Corporation (FDIC) creates a false sense of security while socializing bank losses.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Hidden Costs:</h4>
                            <ul>
                                <li>Banks pay only 0.05% in premiums</li>
                                <li>Taxpayers cover major failures</li>
                                <li>$250k limit often inadequate</li>
                                <li>Insurance fund severely underfunded</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Bank Takeover Reality:</h4>
                            <ul>
                                <li>Assets sold to bigger banks</li>
                                <li>Shareholders wiped out</li>
                                <li>Depositors face restrictions</li>
                                <li>Community loses local bank</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>📊 Recent Bank Failures</h3>
                            <span class="tag">2023 Crisis</span>
                        </div>
                        <div class="card-content">
                            <p>Major bank failures expose system weaknesses</p>
                            <ul>
                                <li>✓ SVB: $209B in assets seized</li>
                                <li>✓ First Republic: $229B takeover</li>
                                <li>✓ Signature Bank: $118B collapse</li>
                                <li>⚠️ More failures expected</li>
                            </ul>
                            <p class="note">These failures cost the FDIC insurance fund billions, ultimately paid by taxpayers</p>
                        </div>
                    </div>
                </div>
            `;
        case 3:
            return `
                <h2>Historical Breaking Points</h2>
                <div class="info-box">
                    <h3>🏛️ Key Historical Events</h3>
                    <div class="timeline-grid">
                        <div class="timeline-item">
                            <h4>1913: Federal Reserve Created</h4>
                            <ul>
                                <li>Private banking cartel formed</li>
                                <li>Control over money supply</li>
                                <li>Beginning of dollar debasement</li>
                                <li>End of true free banking</li>
                            </ul>
                        </div>

                        <div class="timeline-item">
                            <h4>1933: Gold Confiscation</h4>
                            <ul>
                                <li>Executive Order 6102</li>
                                <li>Private gold ownership banned</li>
                                <li>Forced turn-in at $20.67/oz</li>
                                <li>Price raised to $35/oz after</li>
                            </ul>
                        </div>

                        <div class="timeline-item">
                            <h4>1971: End of Gold Standard</h4>
                            <ul>
                                <li>Dollar backed by nothing</li>
                                <li>Unlimited money printing</li>
                                <li>Beginning of major inflation</li>
                                <li>Wages stop tracking productivity</li>
                            </ul>
                        </div>

                        <div class="timeline-item">
                            <h4>1999: Glass-Steagall Repeal</h4>
                            <ul>
                                <li>Banking/Investment merger</li>
                                <li>Increased risk-taking</li>
                                <li>Set stage for 2008 crisis</li>
                                <li>Too big to fail begins</li>
                            </ul>
                        </div>

                        <div class="timeline-item">
                            <h4>2008: Financial Crisis</h4>
                            <ul>
                                <li>Banks created housing bubble</li>
                                <li>Taxpayers forced to bail out banks</li>
                                <li>No executives prosecuted</li>
                                <li>Problem got worse, not better</li>
                            </ul>
                        </div>

                        <div class="timeline-item">
                            <h4>2020: COVID Response</h4>
                            <ul>
                                <li>40% of all USD printed</li>
                                <li>Massive wealth transfer</li>
                                <li>Record inflation follows</li>
                                <li>Small businesses destroyed</li>
                            </ul>
                        </div>

                        <div class="timeline-item">
                            <h4>2023: Banking Crisis</h4>
                            <ul>
                                <li>Multiple major bank failures</li>
                                <li>SVB, Signature, First Republic fall</li>
                                <li>Bailouts disguised as "rescues"</li>
                                <li>System more fragile than ever</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service-grid">
                    <div class="service-card">
                        <div class="card-header">
                            <h3>📉 Purchasing Power Loss</h3>
                            <span class="tag">Critical</span>
                        </div>
                        <div class="card-content">
                            <img src="https://fred.stlouisfed.org/graph/fredgraph.png?g=qLC" alt="Dollar Purchasing Power" style="width: 100%; border-radius: 8px;">
                            <p>The dollar has lost over 96% of its purchasing power since 1913</p>
                        </div>
                    </div>
                </div>
            `;
        case 4:
            return `
                <h2>The True Cost of Inflation</h2>
                <div class="info-box">
                    <h3>💸 Beyond Official Numbers</h3>
                    <p>Official inflation statistics significantly understate the true cost of living increase.</p>
                    <div class="example-grid">
                        <div class="example-item">
                            <h4>Real Price Increases (2000-2023):</h4>
                            <ul>
                                <li>Housing: +250%</li>
                                <li>Education: +180%</li>
                                <li>Healthcare: +200%</li>
                                <li>Food: +90%</li>
                            </ul>
                        </div>
                        <div class="example-item">
                            <h4>Hidden Effects:</h4>
                            <ul>
                                <li>Shrinkflation</li>
                                <li>Quality reduction</li>
                                <li>Category substitution</li>
                                <li>Hedonic adjustments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        case 5:
            return `
                <h2>Time to Choose</h2>
                <div class="info-box warning-box">
                    <h3>⚠️ Staying With Banks Means:</h3>
                    <ul>
                        <li>Your savings lose value every year</li>
                        <li>Banks can freeze your accounts</li>
                        <li>Your data is sold and monitored</li>
                        <li>You fund the banking system</li>
                        <li>You're vulnerable to bail-ins</li>
                        <li>Your wealth is not truly yours</li>
                    </ul>
                </div>

                <div class="completion-note">
                    <h3>🎯 Now You Know Better!</h3>
                    <p>You've completed the Traditional Banking learning path. You now understand:</p>
                    <ul>
                        <li>How the Federal Reserve controls money</li>
                        <li>The truth about fractional reserve banking</li>
                        <li>Historical manipulation of currency</li>
                        <li>The real cost of inflation</li>
                    </ul>
                    <p>Return to the dashboard and choose a better form of money!</p>
                    <button class="button warning" onclick="returnToDashboard()">Return to Dashboard</button>
                </div>
            `;
    }
}

// Add corresponding CSS for new components...

// Update step indicator
function updateStepIndicator() {
    document.getElementById('currentStep').textContent = currentStep;
    document.getElementById('totalSteps').textContent = selectedPath ? totalSteps[selectedPath] : '1';
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentStep === 1;
    document.getElementById('nextBtn').disabled = selectedPath ? 
        currentStep === totalSteps[selectedPath] : true;
    
    // Show/hide dashboard button
    updateDashboardButton();
}

// Add dashboard button to navigation
function updateDashboardButton() {
    let navContainer = document.querySelector('.step-navigation');
    let existingDashBtn = document.getElementById('dashboardBtn');
    
    if (selectedPath && !existingDashBtn) {
        let dashBtn = document.createElement('button');
        dashBtn.id = 'dashboardBtn';
        dashBtn.className = 'button nav-btn';
        dashBtn.innerHTML = '🏠 Dashboard';
        dashBtn.onclick = returnToDashboard;
        navContainer.insertBefore(dashBtn, navContainer.firstChild);
    } else if (!selectedPath && existingDashBtn) {
        existingDashBtn.remove();
    }
}

// Return to main dashboard
function returnToDashboard() {
    selectedPath = null;
    currentStep = 1;
    document.getElementById('step1').innerHTML = dashboardContent;
    
    // Hide other steps if they're visible
    for (let i = 2; i <= Math.max(...Object.values(totalSteps)); i++) {
        const stepElement = document.getElementById(`step${i}`);
        if (stepElement) {
            stepElement.classList.remove('active');
        }
    }
    
    document.getElementById('step1').classList.add('active');
    updateStepIndicator();
}

// Helper functions
function nextStep() {
    if (!selectedPath) {
        return;
    }
    
    if (currentStep < totalSteps[selectedPath]) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep++;
        let nextStepElement = document.getElementById(`step${currentStep}`);
        
        // If next step element doesn't exist, create it
        if (!nextStepElement) {
            nextStepElement = document.createElement('div');
            nextStepElement.id = `step${currentStep}`;
            nextStepElement.className = 'step';
            document.getElementById('app').appendChild(nextStepElement);
        }
        
        nextStepElement.innerHTML = getPathContent(selectedPath, currentStep);
        nextStepElement.classList.add('active');
        updateStepIndicator();
        window.scrollTo(0, 0);
    }
}

function previousStep() {
    if (currentStep > 1) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep--;
        let prevStepElement = document.getElementById(`step${currentStep}`);
        
        if (currentStep === 1 && selectedPath) {
            prevStepElement.innerHTML = getPathContent(selectedPath, currentStep);
        }
        
        prevStepElement.classList.add('active');
        updateStepIndicator();
        window.scrollTo(0, 0);
    }
}

// Wallet integration
async function checkWallet() {
    const walletStatus = document.getElementById('walletStatus');
    walletStatus.innerHTML = `
        <div style="background: rgba(40, 167, 69, 0.2); padding: 15px; border-radius: 8px;">
            ✅ Great! Let's move on to getting some Nano!
        </div>`;
    nextStep();
}

// Payment demonstrations
function demonstrateSimplePayment() {
    NanoPay.open({ 
        title: "Nano Tip Jar",
        address: '@mnpezz',
        wallet: 'natrium',
        button: 'Open Natrium',
        qrcode: true,
        onShippingUpdate: function(details) { return true; },
        success: (block) => {
            console.log('Payment details:', block);
            showNotification(`Order successful!\n${block.shipping ? '\nShipping to: ' + block.shipping : ''}${block.email ? '\nEmail: ' + block.email : ''}`, 'success');
        },
        cancel: () => {
            showNotification('Shop demo cancelled', 'warning');
        }
    });
}

function demonstrateShopPayment() {
    // Redirect to BitRequest brewery demo
    const params = new URLSearchParams({
        p: 'home',
        payment: 'nano',
        uoa: 'usd',
        amount: '0.001',
        address: 'nano_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est',
        d: btoa(JSON.stringify({
            n: 'Demo Shop',
            t: 'Nano Demo Purchase',
            c: 0
        }))
    });
    
    window.open(`https://bitrequest.github.io/?${params.toString()}`, '_blank');
}


function demonstrateInvoice() {
    NanoPay.open({ 
        title: "Custom Invoice",
        address: '@mnpezz',
        wallet: 'nault',
        button: 'Pay Invoice',
        currency: 'USD',
        amount: 0.01,
        contact: true,
        message: "This is a demo invoice payment",
        onShippingUpdate: function(details) { return true; },
        success: (block) => {
            console.log('Invoice paid:', block);
            showNotification(`Invoice paid successfully!\nTransaction: ${block.hash}`, 'success');
        },
        cancel: () => {
            showNotification('Invoice cancelled', 'warning');
        }
    });
}

// Helper function to show notifications
function showNotification(message, type = 'info') {
    const notificationDiv = document.createElement('div');
    notificationDiv.className = `notification ${type}`;
    notificationDiv.innerHTML = message;
    
    // Add notification styles if they don't exist
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.innerHTML = `
            .notification {
                position: fixed;
                bottom: 720px;
                right: 20px;
                padding: 15px 25px;
                border-radius: 8px;
                color: white;
                animation: slideIn 0.5s ease-out;
                z-index: 1000;
                white-space: pre-line;
            }
            .notification.success { background: #28a745; }
            .notification.warning { background: #ffc107; color: #000; }
            .notification.error { background: #dc3545; }
            .notification.info { background: #17a2b8; }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }

    document.body.appendChild(notificationDiv);
    setTimeout(() => {
        notificationDiv.style.animation = 'slideIn 0.5s ease-out reverse';
        setTimeout(() => notificationDiv.remove(), 500);
    }, 3000);
} 

// Add store functionality
const products = {
    original: { name: "CryptoCraft Original", price: 2.00 },
    lite: { name: "CryptoCraft Lite", price: 1.00 },
    skynet: { name: "CryptoCraft Skynet", price: 4.00 }
};

let cart = {};

function addToCart(productId) {
    cart[productId] = (cart[productId] || 0) + 1;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;
    
    cartItems.innerHTML = Object.entries(cart).map(([id, qty]) => {
        const subtotal = products[id].price * qty;
        total += subtotal;
        return `
            <div class="cart-item">
                ${products[id].name} x${qty} 
                <span>$${subtotal.toFixed(2)}</span>
                <button onclick="removeFromCart('${id}')" class="remove-btn">×</button>
            </div>
        `;
    }).join('');
    
    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(productId) {
    if (cart[productId] > 1) {
        cart[productId]--;
    } else {
        delete cart[productId];
    }
    updateCartDisplay();
}

function checkoutWithNano() {
    const total = Object.entries(cart).reduce((sum, [id, qty]) => 
        sum + (products[id].price * qty), 0);
    
    if (total === 0) {
        showNotification('Cart is empty!', 'warning');
        return;
    }

    const items = Object.entries(cart).map(([id, qty]) => ({
        name: `${products[id].name} x${qty}`,
        price: products[id].price * qty
    }));

    NanoPay.open({ 
        title: "CryptoCraft Brewery",
        address: '@development',
        currency: 'USD',
        wallet: 'natrium',
        button: 'Pay with Natrium',
        contact: true,
        shipping: 2.00,
        line_items: items,
        onShippingUpdate: function(details) { return true; },
        success: (block) => {
            console.log('Order details:', block);
            showNotification('Order placed successfully! Check your email for details.', 'success');
            cart = {};
            updateCartDisplay();
        },
        cancel: () => {
            showNotification('Checkout cancelled', 'warning');
        }
    });
}

// Add comparison functionality
function updateComparison() {
    const amount = parseFloat(document.getElementById('compareAmount').value);
    const costComparison = document.getElementById('costComparison');
    
    // Calculate fees
    const fees = {
        nano: {
            fee: 0,
            time: '< 1 second',
            total: amount
        },
        bitcoin: {
            fee: 5, // Average fee
            time: '10-60 minutes',
            total: amount + 5
        },
        paypal: {
            fee: (amount * 0.029) + 0.30,
            time: '1-3 days',
            total: amount + ((amount * 0.029) + 0.30)
        },
        creditCard: {
            fee: amount * 0.03,
            time: '2-3 days',
            total: amount + (amount * 0.03)
        }
    };

    // Update the cost comparison display
    costComparison.innerHTML = Object.entries(fees).map(([method, data]) => `
        <div class="cost-card">
            <h3>${method.charAt(0).toUpperCase() + method.slice(1)}</h3>
            <div class="amount">$${amount.toFixed(2)}</div>
            <div class="fee">+$${data.fee.toFixed(2)} fee</div>
            <div class="total">$${data.total.toFixed(2)} total</div>
            <div class="time">${data.time}</div>
        </div>
    `).join('');
}

// Initialize comparison on load
document.addEventListener('DOMContentLoaded', () => {
    updateComparison();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateStepIndicator();
    updateComparison();
});

// Add this new function to handle path switching
function switchPath(newPath) {
    // Reset step counter
    currentStep = 1;
    
    // Clear any existing steps
    for (let i = 2; i <= Math.max(...Object.values(totalSteps)); i++) {
        const stepElement = document.getElementById(`step${i}`);
        if (stepElement) {
            stepElement.classList.remove('active');
        }
    }
    
    // Select the new path
    selectPath(newPath);
    
    // Ensure we're at the top of the page
    window.scrollTo(0, 0);
} 
