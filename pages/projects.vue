<template>
    <section class="projects py-24 bg-primary  general-pattern">
        <div class="container">
            <div class="text-center heading mb-10">
              <h1 class=" text-secondary font-bold font-body text-head mb-5 ">
                معرض الأعمال
              </h1>

              <p class="text-white opacity-60  font-medium font-body text-paragraph">
                تعرف على كل ابداعات كيان في المجالات المختلفة
              </p>
           </div>

           <div class="grid grid-cols-1 gap-7">
              <ul class="nav-list flex items-center content-center justify-center py-11 ">
                <li class="list-item font-body font-bold" @click="activeTab = 'allProject'" :class="[activeTab === 'allProject' ? 'active' : '']">
                  كل الأعمال
                </li>

                <li class="list-item font-body font-bold"  @click="activeTab = 'website'" :class="[activeTab === 'website' ? 'active' : '']">
                  المواقع
                </li>

                <li class="list-item font-body font-bold" @click="activeTab = 'mobileApp'" :class="[activeTab === 'mobileApp' ? 'active' : '']">
                  تطبيقات الجوال
                </li>

                <li class="list-item font-body font-bold" @click="activeTab = 'logos'" :class="[activeTab === 'logos' ? 'active' : '']">
                  الهويات التجارية
                </li>

                <li class="list-item font-body font-bold" @click="activeTab = 'socialMedia'" :class="[activeTab === 'socialMedia' ? 'active' : '']">
                  التسويق الالكتروني
                </li>

                <li class="list-item font-body font-bold" @click="activeTab = 'motionGraphics'" :class="[activeTab === 'motionGraphics' ? 'active' : '']">
                  الموشن جرافيكس
                </li>
              </ul>

               <div class="all-projects" v-if="activeTab === 'allProject'">
                  <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10">
                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                        الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" :alt="$t(`app.title`)">
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>
                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>
                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
               </div>
                <div class="website" v-if="activeTab === 'website'">
                   <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10">
                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                        الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" :alt="$t(`app.title`)">
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>
                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>
                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
               </div>
                <div class="mobileApp" v-if="activeTab === 'mobileApp'">
                  <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10">
                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                        الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" :alt="$t(`app.title`)">
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>
                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>
                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
               </div>
               <div class="logos" v-if="activeTab === 'logos'">
                 <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10">
                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                        الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" :alt="$t(`app.title`)">
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>
                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>
                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
               </div>
               <div class="socialMedia" v-if="activeTab === 'socialMedia'">
                   <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10">
                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                        الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" :alt="$t(`app.title`)">
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>
                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>
                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
               </div>
               <div class="motionGraphics" v-if="activeTab === 'motionGraphics'">
                  <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10">
                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                        الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" :alt="$t(`app.title`)">
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>
                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>
                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />

                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>

                    <div class="project-box">
                      <div class="image-content">
                        <img src="/images/blog.jpg" loading="lazy" :alt="$t(`app.title`)" />
                      </div>

                      <div class="content">
                        <p class="text-secondary text-paragraph font-body font-bold mb-4">عنوان المشروع</p>

                        <p class="text-white text-links leading-9 mb-4 font-medium font-body">
                          الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية فالهوية من الأهمية بمكان الكيان
                        </p>

                        <nuxt-link to="/project-details" class="custom-bnt yellow-btn font-body font-bold">
                          <img src="/images/back_button.svg" loading="lazy" :alt="$t(`app.title`)" />
                          <span>شاهد العمل</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
               </div>
           </div>
        </div>
    </section>
</template>

<script>
export default {
  layout: `home`,
  scrollToTop: true,

  nuxtI18n: { locales: ['ar'] },

  head() { return { title: this.$t(`home.title`) } }
}
</script>
