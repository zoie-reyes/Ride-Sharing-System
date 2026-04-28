import React from 'react';
import { Star } from 'lucide-react';
import './Pages.css';

export default function RatingsPage() {
  const reviews = [
    { id: 1, date: 'OCT 23, 09:20 AM', text: '"Best experience so far! The driver was very respectful and the car was spotless."', tags: ['Cleanliness', 'Professionalism'], code: 'TRP-00150' },
    { id: 2, date: 'OCT 23, 11:45 AM', text: '"Slightly late for pickup but communicated well. Professional attitude otherwise."', tags: ['Punctuality'], code: 'TRP-00142' },
    { id: 3, date: 'OCT 24, 10:15 PM', text: '"Very polite driver, navigated through traffic expertly. Highly recommend!"', tags: ['Friendly', 'Great Navigation'], code: 'TRP-00210' },
    { id: 4, date: 'OCT 24, 08:30 PM', text: '"Car was exceptionally clean and smelled great. The ride was very comfortable."', tags: ['Cleanliness', 'Comfort'], code: 'TRP-00194' },
  ];

  return (
    <div className="page-content" style={{ backgroundColor: '#fcfcfc' }}>
      <div className="ratings-top-grid">
        <div className="card rating-summary-card">
          <div className="rating-meta-title">PERFORMANCE METRIC</div>
          <div className="rating-title">Overall Rating</div>
          <div className="rating-big-score">
            4.85 <span className="rating-max">/ 5.0</span>
          </div>
          <div className="rating-stars-row">
            <Star fill="#22c55e" color="#22c55e" size={16} />
            <Star fill="#22c55e" color="#22c55e" size={16} />
            <Star fill="#22c55e" color="#22c55e" size={16} />
            <Star fill="#22c55e" color="#22c55e" size={16} />
            <Star fill="#22c55e" color="#22c55e" size={16} />
            <span className="rating-based-on">Based on <strong>500</strong> trips</span>
          </div>
          <div className="rating-percentile">
            You are in the <strong style={{color: '#22c55e'}}>top 5%</strong> of drivers in your region this month.
          </div>
        </div>

        <div className="card rating-breakdown-card">
          <div className="breakdown-header">
            <div>
              <div className="rating-meta-title">DISTRIBUTION</div>
              <div className="rating-title" style={{color: 'white'}}>Rating Breakdown</div>
            </div>
            <button className="btn-text" style={{color: 'white', fontSize: '0.75rem'}}>Download CSV</button>
          </div>
          <div className="breakdown-bars">
            {[5,4,3,2,1].map(star => (
              <div key={star} className="bar-row">
                <span className="star-label">{star} <Star fill="white" color="white" size={10}/></span>
                <div className="bar-bg">
                  <div className="bar-fill" style={{width: star === 5 ? '80%' : star === 4 ? '15%' : '2%'}}></div>
                </div>
                <span className="bar-count">{star === 5 ? 440 : star === 4 ? 40 : star === 3 ? 10 : 5}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ratings-bottom-grid mt-6">
        <div className="feedback-analysis-card card">
          <div className="rating-meta-title">FEEDBACK ANALYSIS</div>
          <div className="rating-title">Service Highlights</div>
          
          <div className="highlights-grid mt-4">
            <div className="highlight-box strengths">
              <div className="box-title"><span style={{color: '#22c55e', fontWeight: '700'}}>👍 STRENGTHS</span></div>
              <div className="tag-row">
                <div className="hl-tag">Friendly <span className="hl-percent">98%</span></div>
                <div className="hl-tag">Safe driving <span className="hl-percent">94%</span></div>
              </div>
              <div className="tag-row">
                <div className="hl-tag">Clean vehicle <span className="hl-percent">92%</span></div>
                <div className="hl-tag">Good navigation <span className="hl-percent">89%</span></div>
              </div>
            </div>
            
            <div className="highlight-box improvements">
              <div className="box-title"><span style={{color: '#f8fafc', fontWeight: '700'}}>📉 IMPROVEMENT AREAS</span></div>
              <div className="tag-row">
                <div className="hl-tag">Late pickup <span className="hl-percent red">4%</span></div>
                <div className="hl-tag">Rude behavior <span className="hl-percent red">1%</span></div>
              </div>
              <div className="box-footer">Suggestions are based on last 30 days of trip feedback.</div>
            </div>
          </div>
        </div>

        <div className="reviews-list">
          {reviews.map(rev => (
            <div key={rev.id} className="review-card card">
              <div className="review-header">
                <div className="review-stars-date">
                  <div className="review-stars">
                    <Star fill="#22c55e" color="#22c55e" size={12}/>
                    <Star fill="#22c55e" color="#22c55e" size={12}/>
                    <Star fill="#22c55e" color="#22c55e" size={12}/>
                    <Star fill="#22c55e" color="#22c55e" size={12}/>
                    <Star fill="#22c55e" color="#22c55e" size={12}/>
                  </div>
                  <span className="review-date">{rev.date}</span>
                </div>
                <div className="review-code">{rev.code}</div>
              </div>
              <div className="review-text">{rev.text}</div>
              <div className="review-tags">
                {rev.tags.map(tag => (
                  <span key={tag} className="review-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
