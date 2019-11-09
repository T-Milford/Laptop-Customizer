import React, { Component } from 'react';
import Feature from './Feature';

{/* DisplayFeatures begins with below HTML */}
<form className="main__form">
<h2>Customize your laptop</h2>
{features}
{/* Feature component runs here within DisplayFeatures. */}
</form>
{/* <DisplayFeatures ends here.  It will need FEATURES object, and will pass in updateFeature function.*/}