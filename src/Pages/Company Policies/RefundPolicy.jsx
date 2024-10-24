import React from 'react';
import { Helmet } from 'react-helmet-async';

//Components
import Navbar from '../../Components/NavBar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';


const RefundPolicy = () => {
  return (
    <>
        <Helmet>
            <title>Refund Policy | Fund Nest</title>
        </Helmet>
        <Navbar />
        <section className='mt-[60px] md:mt-[100px] font-[Poppins]'>
            <div className='w-[90%] mx-auto text-sm pb-[25px]'>
                <h1 className='text-center text-3xl font-semibold py-[20px]'>Refund Policy for Fundnest </h1>
                <div className='font-light space-y-3 text-md '>
                    <h2 className='text-xl font-semibold'><span className='font-bold'>1.</span> Introduction</h2>
                    <p className='w-[90%] text-[#595959]'>Fundnest  is dedicated to maintaining the highest level of customer satisfaction and trust. This comprehensive Refund Policy outlines the circumstances under which refunds will be provided, aligning with industry standards observed by leading platforms such as GoFundMe and DonorBox. Our policy is designed to ensure transparency, fairness, and efficiency in addressing donor refund requests while maintaining the integrity of our fundraising platform.</p>
                </div>
                <div className='font-light mt-3 text-md '>
                    <h2 className='text-xl font-semibold'><span className='font-bold'>2.</span> Scope</h2>
                    <p className='w-[90%] text-[#595959]'>This Refund Policy applies to all donations made through Fundnest 's platform, including:</p>
                    <ol className='list-disc ml-[20px] md:ml-[30px] text-[#595959]'>
                        <li>One-time donations</li>
                        <li>Recurring donations</li>
                        <li>Event-specific fundraisers</li>
                        <li>Emergency relief campaigns</li>
                        <li>Project-based fundraising</li>
                    </ol>
                </div>
                <div className='font-light mt-3 text-md '>
                    <h2 className='text-xl font-semibold'><span className='font-bold'>3.</span> Eligibility for Refunds</h2>
                    <p className='w-[90%] text-[#595959]'>Refunds may be issued in the following circumstances:</p>
                    <div className='ml-[10px] mt-2 space-y-3'>
                        <div>
                            <h3 className='text-lg '><span className=''>3.1</span> Erroneous Charges</h3>
                            <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                <li>If the donor has been incorrectly charged (e.g., duplicate charges, incorrect amount).</li>
                                <li>If there was a technical error in processing the donation.</li>
                            </ol>
                        </div>
                        <div>
                            <h3 className='text-lg '><span className=''>3.2</span> Donor Error</h3>
                            <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                <li>If the donation was made in error (e.g., incorrect amount entered).</li>
                                <li>If the donor accidentally set up a recurring donation instead of a one-time donation.</li>
                            </ol>
                        </div>
                        <div>
                            <h3 className='text-lg '><span className=''>3.3</span> Campaign Issues</h3>
                            <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                <li>If the non-profit organization cannot fulfill its mission as described in the campaign.</li>
                                <li>If the fundraising campaign is canceled before the funds are disbursed.</li>
                                <li>If there are significant changes to the purpose or beneficiaries of the campaign after the donation was made.</li>
                            </ol>
                        </div>
                        <div>
                            <h3 className='text-lg '><span className=''>3.4</span> Fraud or Unauthorized Transactions</h3>
                            <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                <li>In cases of proven fraud.</li>
                                <li>For unauthorized transactions (e.g., stolen credit card used).</li>
                            </ol>
                        </div>
                        <div>
                            <h3 className='text-lg '><span className=''>3.5</span> Cooling-Off Period</h3>
                            <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                <li>If the donor requests a refund within the specified cooling-off period (see Section 4).</li>
                            </ol>
                        </div>
                    </div>
                    <div className='font-light mt-3 text-md '>
                        <h2 className='text-xl font-semibold'><span className='font-bold'>4.</span> Cooling-Off Period</h2>
                        <div className='ml-[10px] mt-2 space-y-3'>
                            <div>
                                <h3 className='text-lg '><span className=''>4.1</span> Duration</h3>
                                <p className='w-[90%] text-[#595959]'>Donors may request a full refund within 14 days of making a donation. This cooling-off period applies to all donations unless specified otherwise in the campaign details.</p>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>4.2</span> Exceptions</h3>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Emergency relief campaigns may have a shorter cooling-off period due to the urgent nature of fund disbursement.</li>
                                    <li>Certain time-sensitive campaigns may have modified cooling-off periods, which will be clearly communicated to donors before they make a contribution.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>4.3</span> Recurring Donations</h3>
                                <p className='w-[90%] text-[#595959]'>For recurring donations, the cooling-off period applies to each individual donation within the series.</p>
                            </div>
                        </div>
                    </div>
                    <div className='font-light mt-3 text-md '>
                        <h2 className='text-xl font-semibold'><span className='font-bold'>5.</span> Refund Process</h2>
                        <div className='ml-[10px] mt-2 space-y-3'>
                            <div>
                                <h3 className='text-lg '><span className=''>5.1</span> Initiating a Refund Request</h3>
                                <p className='w-[90%] text-[#595959]'>To request a refund, donors must contact Fundnest  customer service through one of the following channels:</p>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Email: <a href='mailto:refunds@fundnest.org' className='text-[#4FC0E8] cursor-pointer hover:underline transition-all duration-500'>refunds@fundnest.org</a></li>
                                    <li>Phone: <a href='tel:+250 787 171 274' className='text-[#4FC0E8] cursor-pointer hover:underline transition-all duration-500'>+250 787 171 274</a></li>
                                    <li>Online Form: <a href='https://fundnest.org/refund-request' className='text-[#4FC0E8] cursor-pointer hover:underline transition-all duration-500'>www.fundnest.org/refund-request</a></li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>5.2</span> Required Information</h3>
                                <p className='w-[90%] text-[#595959]'>Donors must provide the following information when requesting a refund:</p>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Donor's full name</li>
                                    <li>Date of donation</li>
                                    <li>Amount of donation</li>
                                    <li>Campaign or non-profit organization name</li>
                                    <li>Reason for the refund request</li>
                                    <li>Any supporting documentation or evidence (if applicable)</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>5.3</span> Timeframe for Refund Requests</h3>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Refund requests should be submitted as soon as possible after the donation is made.</li>
                                    <li>Requests made after the cooling-off period will be considered on a case-by-case basis.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='font-light mt-3 text-md'>
                        <h2 className='text-xl font-semibold'><span className='font-bold'>6.</span> Refund Approval Process</h2>
                        <div className='ml-[10px] mt-2 space-y-3'>
                            <div>
                                <h3 className='text-lg '><span className=''>6.1</span> Review Period</h3>
                                <p className='w-[90%] text-[#595959]'>Refund requests will be reviewed within 10 business days of receipt.</p>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>6.2</span> Evaluation Criteria</h3>
                                <p className='w-[90%] text-[#595959]'>The refund approval process includes:</p>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Verification of the donation details.</li>
                                    <li>Assessment of the reason for the refund request.</li>
                                    <li>Ensuring the request complies with the Refund Policy.</li>
                                    <li>Consultation with the non-profit organization if necessary.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>6.3</span> Approval Authority</h3>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Refunds within the cooling-off period will be automatically approved.</li>
                                    <li>Refunds outside the cooling-off period require approval from a senior customer service representative or the finance department.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='font-light mt-3 text-md'>
                        <h2 className='text-xl font-semibold'><span className='font-bold'>7.</span> Refund Processing</h2>
                        <div className='ml-[10px] mt-2 space-y-3'>
                            <div>
                                <h3 className='text-lg '><span className=''>7.1</span> Method of Refund</h3>
                                <p className='w-[90%] text-[#595959]'>Approved refunds will be processed using the original payment method whenever possible.</p>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>7.2</span> Timeframe for Processing</h3>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Approved refunds will be processed within 14 business days of approval.</li>
                                    <li>The actual receipt of funds may vary depending on the donor's financial institution.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>7.3</span> Notification</h3>
                                <p className='w-[90%] text-[#595959]'>Donors will be notified via email once their refund has been processed.</p>
                            </div>
                        </div>
                    </div>
                    <div className='font-light mt-3 text-md'>
                        <h2 className='text-xl font-semibold'><span className='font-bold'>8.</span>  Partial Refunds</h2>
                        <div className='ml-[10px] mt-2 space-y-3'>
                            <div>
                                <h3 className='text-lg '><span className=''>8.1</span> Eligibility for Partial Refunds</h3>
                                <p className='w-[90%] text-[#595959]'>Partial refunds may be issued in the following situations:</p>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>If only part of the donation was intended for a specific purpose that cannot be fulfilled.</li>
                                    <li>In cases where a portion of the funds has already been utilized by the non-profit organization.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>8.2</span> Calculation of Partial Refunds</h3>
                                <p className='w-[90%] text-[#595959]'>Partial refunds will be calculated based on:</p>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>The portion of the donation used by the non-profit organization.</li>
                                    <li>The remaining value of the donation that can be refunded.</li>
                                    <li>Any non-refundable fees or charges associated with the donation.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='font-light mt-3 text-md'>
                        <h2 className='text-xl font-semibold'><span className='font-bold'>9.</span>  Non-Refundable Items</h2>
                        <p className='w-[90%] text-[#595959]'>The following items are generally non-refundable:</p>
                        <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                            <li>Donations that have been fully utilized by the non-profit organization for the intended purpose.</li>
                            <li>Donations made for completed projects or campaigns.</li>
                            <li>Platform fees and transaction costs associated with the donation.</li>
                            <li>Donations made through third-party platforms that do not support refunds.</li>
                        </ol>
                    </div>
                    <div className='font-light mt-3 text-md'>
                        <h2 className='text-xl font-semibold'><span className='font-bold'>10.</span>  Exceptions and Special Circumstances</h2>
                        <div className='ml-[10px] mt-2 space-y-3'>
                            <div>
                                <h3 className='text-lg '><span className=''>10.1</span> Emergency Relief Campaigns</h3>
                                <p className='w-[90%] text-[#595959]'>Due to the urgent nature of emergency relief efforts:</p>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Refunds may be limited or unavailable once funds have been disbursed.</li>
                                    <li>A shorter cooling-off period may apply.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>10.2</span> Fraud or Misuse of Funds</h3>
                                <p className='w-[90%] text-[#595959]'>In cases where fraud or misuse of funds by a non-profit organization is suspected or proven:</p>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Fundnest  reserves the right to issue refunds to all affected donors.</li>
                                    <li>The normal refund request process may be bypassed in these situations.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>10.3</span> Legal Requirements</h3>
                                <p className='w-[90%] text-[#595959]'>Fundnest  will comply with any refund requirements mandated by local laws and regulations, which may supersede this policy.</p>
                            </div>
                        </div>
                    </div>
                    <div className='font-light mt-3 text-md'>
                        <h2 className='text-xl font-semibold'><span className='font-bold'>11.</span>  Dispute Resolution</h2>
                        <div className='ml-[10px] mt-2 space-y-3'>
                            <div>
                                <h3 className='text-lg '><span className=''>11.1</span> Escalation Process</h3>
                                <p className='w-[90%] text-[#595959]'>The dispute resolution process includes:</p>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Reviewing the case details and previous correspondence.</li>
                                    <li>Engaging in further communication with the donor to understand their concerns fully.</li>
                                    <li>Consulting with relevant departments (e.g., finance, legal) if necessary.</li>
                                    <li>Attempting to resolve the issue amicably through negotiation or mediation.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>11.2</span> Third-Party Mediation</h3>
                                <p className='w-[90%] text-[#595959]'>If the dispute cannot be resolved internally:</p>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Fundnest  may suggest engaging a third-party mediator.</li>
                                    <li>The cost of mediation will be shared equally between Fundnest  and the donor unless otherwise agreed.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>11.3</span> Final Decision</h3>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>The customer service manager will provide a final decision on the refund request within 30 days of the escalation.</li>
                                    <li>This decision will be communicated to the donor in writing, including a detailed explanation of the reasoning behind the decision.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='font-light mt-3 text-md'>
                        <h2 className='text-xl font-semibold'><span className='font-bold'>12.</span>  Policy Amendments and Updates</h2>
                        <div className='ml-[10px] mt-2 space-y-3'>
                            <div>
                                <h3 className='text-lg '><span className=''>12.1</span> Regular Review</h3>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>This Refund Policy will be reviewed annually to ensure it remains current and effective.</li>
                                    <li>Updates may be made more frequently in response to changes in regulations or business practices.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>12.2</span> Notification of Changes</h3>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Any significant changes to the Refund Policy will be communicated to users via email and through a prominent notice on our website.</li>
                                    <li>Minor changes may be made without direct notification but will be reflected in the updated policy on our website.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>12.3</span> Application of Policy Changes</h3>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Changes to the Refund Policy will generally apply only to donations made after the change is implemented.</li>
                                    <li>In some cases, changes that benefit donors may be applied retroactively at Fundnest 's discretion.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='font-light mt-3 text-md'>
                        <h2 className='text-xl font-semibold'><span className='font-bold'>13.</span>  Education and Transparency</h2>
                        <div className='ml-[10px] mt-2 space-y-3'>
                            <div>
                                <h3 className='text-lg '><span className=''>13.1</span> Donor Education</h3>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Fundnest  will provide clear information about the Refund Policy at the point of donation.</li>
                                    <li>Educational resources about the refund process will be made available on our website.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>13.2</span> Transparency in Reporting</h3>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Aggregate data on refund requests and approvals will be published annually as part of our commitment to transparency.</li>
                                    <li>This data will not include any personally identifiable information.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='font-light mt-3 text-md'>
                        <h2 className='text-xl font-semibold'><span className='font-bold'>14.</span>   Legal Compliance</h2>
                        <div className='ml-[10px] mt-2 space-y-3'>
                            <div>
                                <h3 className='text-lg '><span className=''>14.1</span> Data Protection</h3>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>All personal data collected during the refund process will be handled in accordance with applicable data protection laws.</li>
                                    <li>Donors have the right to request access to, correction of, or deletion of their personal data related to refund requests.</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-lg '><span className=''>14.2</span> Financial Regulations</h3>
                                <ol className='list-decimal ml-[20px] md:ml-[30px] text-[#595959]'>
                                    <li>Fundnest  will comply with all applicable financial regulations in processing refunds.</li>
                                    <li>This includes adherence to anti-money laundering (AML) and know your customer (KYC) requirements.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='font-light mt-3 text-md'>
                        <h2 className='text-xl font-semibold'><span className='font-bold'>15.</span>   Contact Information</h2>
                        <p className='w-[90%] text-[#595959]'>For any questions, concerns, or feedback regarding this Refund Policy, donors can contact us at:</p>
                        <ol className='list-disc ml-[20px] md:ml-[30px] text-[#595959]'>
                            <li>Email: <a href='mailto:refunds@fundnest.org' className='text-[#4FC0E8] cursor-pointer hover:underline transition-all duration-500'>refunds@fundnest.org</a></li>
                            <li>Phone: <a href='tel:+250 787 171 274' className='text-[#4FC0E8] cursor-pointer hover:underline transition-all duration-500'>+250 787 171 274</a></li>
                            <li>Mailing Address: 1 KN 78 St, Kigali, Norrsken House Kigali, Rwanda</li>
                            <li>Website: <a href='https://fundnest.org' className='text-[#4FC0E8] cursor-pointer hover:underline transition-all duration-500'>www.fundnest.org/contact</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        <ScrollToTop />
    </>
  )
}

export default RefundPolicy;