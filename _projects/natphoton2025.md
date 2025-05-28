---
layout: page
title: Towards the ultimate limits of artificial neural networks
complement: Nat. Photonics (2025)
img: assets/img/highlights/natphoton2025.png
importance: 991
related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/highlights/natphoton2025_highres.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Artistic representation of an optical measurement in a complex scattering system. Optical information is collected by a camera chip and digitally processed by an artificial neural network. Image credit: oliver-diekmann.graphics.
</div>

<p align="justify">
<b>
When light is scattered, how precisely can a measurement result be inferred from this light? We explored the limits of what is possible using artificial intelligence.
</b>
</p>

<p align="justify"> 
No image is infinitely sharp: no matter how precisely you build a microscope or a camera, there are always fundamental precision limits that cannot be exceeded in principle. For example, the position of a particle can never be measured with infinite precision; a certain amount of uncertainty is unavoidable. This limit does not result from technical weaknesses, but from the physical properties of light and from the transmission of information itself.
</p>

<p align="justify"> 
We therefore posed the question: What is the absolute precision limit that is possible with optical measurement methods? And how can this limit be approached as closely as possible? We succeeded in calculating the ultimate limit for the theoretically achievable precision, and also managed to develop artificial neural networks that come close to this limit after appropriate training. This strategy is now to be used in imaging processes, for example in biomedical imaging applications.
</p>

<p align="justify">
<b>
An ultimate limit to measurement precision
</b>
</p>

<p align="justify"> 
To illustrate how challenging optical imaging can be, we can imagine that we are looking at a small object located behind a shower curtain. Because of random light scattering by the curtain, we do not just see an image of the object, but a complicated light pattern consisting of many lighter and darker patches of light. The question now is: how precisely can we estimate where the object actually is based on this image, and what is the ultimate limit to the achievable precision?
</p>

<p align="justify"> 
Such scenarios are especially important in biophysics and medical imaging. Indeed, when light is scattered by biological tissues, it appears to lose information about deeper tissue structures. But how much of this information can be recovered in principle? This question is not only of a technical nature, but physics itself sets a fundamental limit here.
</p>

<p align="justify"> 
The answer to this is provided by a theoretical measure: the so-called Fisher information. It describes how much information a noisy optical signal contains about an unknown parameter, such as the object position. If the Fisher information is low, a precise determination of the parameter value is not possible, no matter how sophisticatedly the signal is analyzed. Based on the Fisher information, the team was able to calculate an upper limit for the theoretically achievable precision in optical experiments.
</p>

<p align="justify">
<b>
Neural networks can learn from chaotic light patterns
</b>
</p>

<p align="justify"> 
In a proof-of-principle experiment conducted by the team, a laser beam was directed at a small, reflective object. This object was located behind a turbid liquid, so that the recorded images only showed highly distorted light patterns. The measurement conditions varied depending on the turbidity: the larger the turbidity, the greater the difficulty of obtaining precise position information from the measured signal.
</p>

<p align="justify"> 
To the human eye, these images looked like random patterns. But by feeding many such images (each with a known object position) into a neural network, the network could learn which patterns were associated with which positions. After sufficient training, the network was able to determine the object position very precisely, even with new, unknown patterns.
</p>

<p align="justify">
<b>
A precision close to the physical limit
</b>
</p>

<p align="justify"> 
Particularly noteworthy: the precision of the network predictions was only slightly worse than the theoretically achievable precision calculated using Fisher information. This means that the artificial neural networks implemented in this study were not only effective, but also almost optimal, as they came close to the ultimate precision that is permitted by the laws of physics.
</p>

<p align="justify"> 
This realization has far-reaching consequences: with the help of intelligent algorithms, optical measurement methods could be significantly improved in a wide range of areas - from medical diagnostics to materials research and quantum technology. In future projects, the research team wants to work with partners from applied physics and medicine to investigate how these AI-supported methods can be used in specific systems.
</p>

<p align="justify"> 
This study has been published in Nature Photonics {% cite starshynov_model-free_2025 %}.
</p>
