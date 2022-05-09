import React from 'react';
import Accordion from 'react-bootstrap/accordion'
import './accordion.css'
const accordion = () => {
    return ( 
    <div className='container'>
      <div className='accordion'>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>1.What Do You Guys Do Actually?</Accordion.Header>
    <Accordion.Body>
    <p>
    Generally, a dealer is someone who buys and sells securities for his/her or her account. Dealers act as the principal in trading. In the financial market, dealers purchase and sell financial products within the market. They then trade and distribute financial securities. Dealers in casinos are appointed to assist in the game at a gambling table. They play a significant role in distributing bets and payouts. Good communication skills, attention to detail, and customer service are necessary for performing this job.
                </p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>2. What Is Your Benifits??</Accordion.Header>
    <Accordion.Body>
    <p>
    The benefits of being a dealership or a distributor are many. A franchise is normally able to secure a lower price on goods, giving them greater buying power, than an independent seller would be able to get. Frequently, a dealership or distributor handles a specific territory, with exclusive rights to sell the brand in that area. Competition for sales of the dealer/distributor's brands, therefore, is non-existent with sales territories. Dealerships especially are known for their advertising programs. By joining together in a cooperative manner to purchase air time and produce television and radio advertisements, they are able to secure a presence that an independent business could not beat. Most franchisers also provide their dealers or distributors with point-of-sale materials. Sometimes they may offer the benefits of a credit card program and a national warranty as well.
                </p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>3.WHAT Does You Provide To Your Customers Specially?</Accordion.Header>
    <Accordion.Body>
    <p> Its a All-in-one Package.
    All of the types of eCommerce businesses selling physical goods must rely on a comprehensive warehousing strategy to satisfy customers. We give you All the benifits you need. The goal in business is to be profitable at scale. This means you’re able to increase your profits without excessive cost increases. This can be difficult with physical product businesses, as there’s always a cost tied to goods. If you sell any kind of physical item, you need a location to store increasing numbers of units.

This is where warehouses come in. Product businesses need enough room to store, package, and ship their products. A warehouse makes this possible, so you don’t need to work out of your office or home.So, You can choose us without any hegitation.
                </p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
        <div className='img'>
         <img src="https://www.pngkit.com/png/full/214-2142839_the-company-is-an-authorized-dealer-of-multifunction.png"/>
        </div>
    </div>
        
    );
};

export default accordion;